// script for AMPLFY build
const state = {
  balance: 5000,
  artists: [
    { id: 'a1', name: 'Nova Kade', genre: 'Indie Pop', listeners: 42000, price: 12.5, change: 0.08, sharesAvailable: 5000, img: 'liltonyperf.jpg', description: 'Dreamlike indie pop with cinematic hooks.' },
    { id: 'a2', name: 'Rex Sable', genre: 'Hip-Hop', listeners: 120000, price: 21.2, change: -0.03, sharesAvailable: 2000, img: 'b6perf.jpg', description: 'Underground bars and raw storytelling.' },
    { id: 'a3', name: 'Synthora', genre: 'Electronic', listeners: 8000, price: 4.2, change: 0.22, sharesAvailable: 10000, img: 'AMPLFYfirstimg.png', description: 'Textured synthscapes for late-night drives.' }
  ],
  holdings: [],
  transactions: []
};

const fmtMoney = v => `$${Number(v).toLocaleString(undefined,{minimumFractionDigits:2, maximumFractionDigits:2})}`;
const fmtPct = v => `${(v*100).toFixed(1)}%`;

function showPage(pageId){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  const t = document.getElementById(pageId);
  if(t) t.classList.add('active');

  document.querySelectorAll('.nav-link').forEach(n=>n.classList.remove('active'));
  const nav = Array.from(document.querySelectorAll('.nav-link')).find(a=>a.getAttribute('onclick') && a.getAttribute('onclick').includes(`'${pageId}'`));
  if(nav) nav.classList.add('active');

  closeMobileMenu();
  renderAll();
}

function toggleMobileMenu(){
  const el = document.getElementById('mobileMenu');
  const btn = document.querySelector('.mobile-menu-btn');
  if(!el) return;
  const open = el.classList.toggle('active');
  el.setAttribute('aria-hidden', (!open).toString());
  btn.setAttribute('aria-expanded', open.toString());
}

function closeMobileMenu(){
  const el = document.getElementById('mobileMenu');
  if(el) el.classList.remove('active');
  const btn = document.querySelector('.mobile-menu-btn');
  if(btn) btn.setAttribute('aria-expanded','false');
}

function renderAll(){
  renderDashboard();
  renderDiscover();
  renderPortfolio();
  updateBalanceDisplays();
}

function renderDashboard(){
  document.getElementById('stat-artists').textContent = state.artists.length;
  const avgGrowth = (state.artists.reduce((s,a)=>s+(a.change||0),0) / state.artists.length) || 0;
  document.getElementById('stat-growth').textContent = (avgGrowth*100).toFixed(1) + '%';
  const totalVol = state.artists.reduce((s,a)=>s + (a.price * (a.sharesAvailable||0)), 0);
  document.getElementById('stat-volume').textContent = fmtMoney(totalVol/1000) + 'k';

  const grid = document.getElementById('artistsGrid');
  grid.innerHTML = '';
  state.artists.slice().forEach(a => grid.appendChild(makeArtistCard(a)));
}

function renderDiscover(){
  const genres = Array.from(new Set(state.artists.map(a=>a.genre)));
  const genreFilter = document.getElementById('genreFilter');
  if(genreFilter && genreFilter.children.length <= 1){
    genres.forEach(g => { const opt = document.createElement('option'); opt.value = g; opt.textContent = g; genreFilter.appendChild(opt); });
  }

  const grid = document.getElementById('discoverGrid');
  if(!grid) return;
  const search = (document.getElementById('searchInput').value || '').toLowerCase();
  const genre = (document.getElementById('genreFilter').value || 'all');
  const sortBy = (document.getElementById('sortFilter').value || 'listeners');
  let list = state.artists.filter(a => (a.name.toLowerCase().includes(search) || a.genre.toLowerCase().includes(search) || (a.description||'').toLowerCase().includes(search)) && (genre==='all'||a.genre===genre));
  if(sortBy==='listeners') list.sort((x,y)=>y.listeners-x.listeners);
  if(sortBy==='price') list.sort((x,y)=>y.price-y.price);
  if(sortBy==='change') list.sort((x,y)=>y.change-y.change);
  document.getElementById('resultsCount').textContent = `${list.length} result${list.length===1?'':'s'}`;
  grid.innerHTML = '';
  list.forEach(a=>grid.appendChild(makeArtistCard(a,true)));
}

function renderPortfolio(){
  const totalValue = state.holdings.reduce((sum,h)=>{ const art = state.artists.find(a=>a.id===h.artistId); return sum + (art ? art.price * h.shares : 0); },0);
  const invested = state.holdings.reduce((s,h)=> s + h.shares * h.avgPrice, 0);
  const ret = totalValue - invested;
  document.getElementById('portfolioValue').textContent = fmtMoney(totalValue);
  document.getElementById('portfolioInvested').textContent = fmtMoney(invested);
  document.getElementById('portfolioReturn').textContent = (ret>=0?'+':'') + fmtMoney(ret);
  document.getElementById('portfolioReturnPercent').textContent = invested ? `${((ret/invested)*100).toFixed(2)}%` : '+0.00%';

  const tbody = document.getElementById('holdingsTableBody');
  tbody.innerHTML = '';
  state.holdings.forEach(h => {
    const art = state.artists.find(a=>a.id===h.artistId);
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${art ? art.name : '—'}</td>
      <td>${h.shares}</td><td>${fmtMoney(h.avgPrice)}</td><td>${art?fmtMoney(art.price):'—'}</td>
      <td>${art?fmtMoney(art.price*h.shares):'—'}</td><td>${art?fmtMoney((art.price-h.avgPrice)*h.shares):'—'}</td>
      <td><button class="btn-primary" onclick="openTransactionModal('${h.artistId}','sell')">Sell</button></td>`;
    tbody.appendChild(tr);
  });

  const tlist = document.getElementById('transactionsList');
  tlist.innerHTML = '';
  state.transactions.slice().reverse().forEach(tx => {
    const d = new Date(tx.time).toLocaleString();
    const div = document.createElement('div'); div.className='transaction-item';
    div.innerHTML = `<div class="transaction-left"><div class="transaction-icon ${tx.type}">${tx.type==='buy'?'+':'−'}</div><div class="transaction-details"><p>${tx.artistName}</p><p>${tx.shares} shares @ ${fmtMoney(tx.price)}</p></div></div><div class="transaction-right"><p>${tx.type.toUpperCase()}</p><p class="transaction-date">${d}</p></div>`;
    tlist.appendChild(div);
  });
}

function makeArtistCard(a, showActions=false){
  const card = document.createElement('article'); card.className='artist-card';
  const imgWrap = document.createElement('div'); imgWrap.className='artist-image';
  const img = document.createElement('img'); img.src = a.img || 'AMPLFYfirstimg.png'; img.alt = a.name;
  imgWrap.appendChild(img);
  const badge = document.createElement('div'); badge.className='genre-badge'; badge.textContent = a.genre;
  imgWrap.appendChild(badge);

  const info = document.createElement('div'); info.className='artist-info';
  info.innerHTML = `<div><div class="artist-name">${a.name}</div><div class="artist-listeners">${a.listeners.toLocaleString()} listeners</div></div>`;
  const priceRow = document.createElement('div'); priceRow.className='price-row';
  const priceMain = document.createElement('div'); priceMain.className='price-main'; priceMain.textContent = fmtMoney(a.price);
  const change = document.createElement('div'); change.className='price-change ' + (a.change>=0?'positive':'negative'); change.textContent = (a.change>=0?'+':'') + (a.change*100).toFixed(1) + '%';
  priceRow.appendChild(priceMain); priceRow.appendChild(change);

  const actions = document.createElement('div'); actions.style.display='flex'; actions.style.gap='8px'; actions.style.marginTop='10px';
  const view = document.createElement('button'); view.className='btn-secondary'; view.textContent='View'; view.onclick=()=>openArtistModal(a.id);
  actions.appendChild(view);
  if(showActions){ const buy = document.createElement('button'); buy.className='btn-primary'; buy.textContent='Buy'; buy.onclick=()=>openTransactionModal(a.id,'buy'); actions.appendChild(buy); }

  info.appendChild(priceRow); info.appendChild(actions);
  card.appendChild(imgWrap); card.appendChild(info);

  return card;
}

function openArtistModal(artistId){
  const art = state.artists.find(a=>a.id===artistId);
  const modal = document.getElementById('artistModal');
  const content = document.getElementById('artistDetailContent');
  if(!art) return;
  content.innerHTML = `<div class="artist-detail-header"><img class="artist-detail-image" src="${art.img}" alt="${art.name}"/><div class="artist-detail-info"><div class="artist-detail-genre">${art.genre}</div><h2 class="artist-detail-name">${art.name}</h2><div class="artist-detail-meta"><div>${art.listeners.toLocaleString()} listeners</div></div><p class="artist-detail-bio">${art.description}</p><div class="artist-detail-price-section"><div><div class="artist-detail-price">${fmtMoney(art.price)}</div><div class="artist-detail-change ${(art.change>=0)?'positive':'negative'}">${(art.change>=0?'+':'')+ (art.change*100).toFixed(1)}%</div></div><div><button class="buy-btn" onclick="openTransactionModal('${art.id}','buy')">Buy Shares</button></div></div></div></div>`;
  modal.classList.add('active'); modal.setAttribute('aria-hidden','false');
}

function closeArtistModal(){ const m=document.getElementById('artistModal'); if(m){ m.classList.remove('active'); m.setAttribute('aria-hidden','true'); } }

function openTransactionModal(artistId, mode='buy'){
  const modal = document.getElementById('transactionModal');
  const art = state.artists.find(a=>a.id===artistId);
  if(!art) return;
  document.getElementById('transactionModalTitle').textContent = mode==='buy' ? 'Buy Shares' : 'Sell Shares';
  const info = document.getElementById('transactionArtistInfo');
  info.innerHTML = `<div style="display:flex;align-items:center;gap:12px"><img src="${art.img}" style="width:72px;height:72px;border-radius:8px;object-fit:cover"/><div><h3 style="margin:0">${art.name}</h3><div style="color:#9aa6b2">${art.genre}</div><div style="margin-top:6px;font-weight:700">${fmtMoney(art.price)} / share</div></div></div>`;
  const sharesInput = document.getElementById('sharesInput');
  sharesInput.value = 1; sharesInput.dataset.mode = mode; sharesInput.dataset.artistId = artistId;
  document.getElementById('availableShares').textContent = `Available: ${art.sharesAvailable}`;
  updateTransactionTotal();
  modal.classList.add('active'); modal.setAttribute('aria-hidden','false');
}

function closeTransactionModal(){ const m=document.getElementById('transactionModal'); if(m){ m.classList.remove('active'); m.setAttribute('aria-hidden','true'); } }

function updateTransactionTotal(){
  const sharesInput = document.getElementById('sharesInput');
  const shares = Number(sharesInput.value) || 0;
  const artistId = sharesInput.dataset.artistId;
  const art = state.artists.find(a=>a.id===artistId);
  const total = shares * (art ? art.price : 0);
  document.getElementById('totalCost').textContent = fmtMoney(total);
  document.getElementById('transactionBalance').textContent = fmtMoney(state.balance);
  const warn = document.getElementById('transactionWarning');
  const confirmBtn = document.getElementById('confirmTransactionBtn');
  if(total > state.balance){ warn.style.display='flex'; warn.textContent = 'Insufficient balance.'; confirmBtn.disabled = true; }
  else{ warn.style.display='none'; confirmBtn.disabled = false; }
}

function confirmTransaction(){
  const sharesInput = document.getElementById('sharesInput');
  const mode = sharesInput.dataset.mode; const artistId = sharesInput.dataset.artistId; const shares = Number(sharesInput.value) || 0;
  const art = state.artists.find(a=>a.id===artistId);
  if(!art) return alert('Artist not found');
  const total = shares * art.price;
  if(mode==='buy'){
    if(total > state.balance) return alert('Insufficient funds');
    state.balance -= total;
    let h = state.holdings.find(x=>x.artistId===artistId);
    if(!h){ state.holdings.push({artistId, shares, avgPrice: art.price}); } else { const newShares = h.shares + shares; h.avgPrice = ((h.shares*h.avgPrice)+(shares*art.price))/newShares; h.shares = newShares; }
    state.transactions.push({type:'buy', artistId, artistName: art.name, shares, price: art.price, time: Date.now()});
  } else {
    const h = state.holdings.find(x=>x.artistId===artistId);
    if(!h || h.shares < shares) return alert('Not enough shares');
    h.shares -= shares; state.balance += total; state.transactions.push({type:'sell', artistId, artistName: art.name, shares, price: art.price, time: Date.now()}); state.holdings = state.holdings.filter(x=>x.shares>0);
  }
  closeTransactionModal(); renderAll(); alert('Transaction completed');
}

function updateBalanceDisplays(){ document.querySelectorAll('.balance-amount').forEach(el=>el.textContent = fmtMoney(state.balance)); document.getElementById('topBalance') && (document.getElementById('topBalance').textContent = fmtMoney(state.balance)); document.getElementById('mobileBalance') && (document.getElementById('mobileBalance').textContent = fmtMoney(state.balance)); }

function applyFilters(){ renderDiscover(); }

document.addEventListener('DOMContentLoaded', ()=>{
  document.querySelectorAll('.close-modal').forEach(b=>b.addEventListener('click', ()=>{ b.closest('.modal') && b.closest('.modal').classList.remove('active'); }));
  document.querySelectorAll('.modal').forEach(m=>m.addEventListener('click', e=>{ if(e.target === m) m.classList.remove('active'); }));
  renderAll();
});