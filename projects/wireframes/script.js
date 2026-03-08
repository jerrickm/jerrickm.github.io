const artists = [
    {
        id: '1',
        name: 'VORTEX',
        genre: 'Hip-Hop',
        currentPrice: 24.50,
        priceChange24h: 12.5,
        totalShares: 10000,
        availableShares: 3200,
        bio: 'Underground rapper from Brooklyn bringing raw energy and authentic storytelling. Known for gritty lyrics and boom-bap production.',
        imageUrl: 'https://images.unsplash.com/photo-1758684519770-de01e4ffa4de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXAlMjBob3AlMjByYXBwZXIlMjBwZXJmb3JtaW5nfGVufDF8fHx8MTc3MTIwMzU2OHww&ixlib=rb-4.1.0&q=80&w=400',
        monthlyListeners: 45200,
        joinedDate: '2026-01-15'
    },
    {
        id: '2',
        name: 'Luna Skye',
        genre: 'Indie Pop',
        currentPrice: 18.75,
        priceChange24h: 8.3,
        totalShares: 10000,
        availableShares: 4500,
        bio: 'Dreamy vocals meet bedroom pop production. Creating intimate soundscapes that resonate with the digital generation.',
        imageUrl: 'https://images.unsplash.com/photo-1520872024865-3ff2805d8bb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBpbmRpZSUyMHNpbmdlciUyMG1pY3JvcGhvbmV8ZW58MXx8fHwxNzcxMTk2NzgxfDA&ixlib=rb-4.1.0&q=80&w=400',
        monthlyListeners: 67800,
        joinedDate: '2026-01-20'
    },
    {
        id: '3',
        name: 'NEONWAV3',
        genre: 'Electronic',
        currentPrice: 32.10,
        priceChange24h: 15.7,
        totalShares: 10000,
        availableShares: 2100,
        bio: 'Future bass and synth-wave producer pushing boundaries. Viral tracks on TikTok are driving explosive growth.',
        imageUrl: 'https://images.unsplash.com/photo-1712530708772-49749a0bad58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljJTIwbXVzaWMlMjBkaiUyMHByb2R1Y2VyfGVufDF8fHx8MTc3MTIwMzU2OHww&ixlib=rb-4.1.0&q=80&w=400',
        monthlyListeners: 123500,
        joinedDate: '2026-01-10'
    },
    {
        id: '4',
        name: 'The Riffs',
        genre: 'Rock',
        currentPrice: 15.40,
        priceChange24h: -2.3,
        totalShares: 10000,
        availableShares: 5800,
        bio: 'Garage rock revival with punk energy. Four-piece band bringing back the raw sound of the early 2000s.',
        imageUrl: 'https://images.unsplash.com/photo-1718180801089-d99879d14bb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrJTIwYmFuZCUyMGd1aXRhcmlzdCUyMGNvbmNlcnR8ZW58MXx8fHwxNzcxMjAzNTY5fDA&ixlib=rb-4.1.0&q=80&w=400',
        monthlyListeners: 34600,
        joinedDate: '2026-02-01'
    },
    {
        id: '5',
        name: 'Marcus Cole',
        genre: 'Jazz',
        currentPrice: 21.30,
        priceChange24h: 5.2,
        totalShares: 10000,
        availableShares: 4200,
        bio: 'Modern jazz saxophonist blending traditional bebop with contemporary influences. Studied at Berklee.',
        imageUrl: 'https://images.unsplash.com/photo-1613412140788-9ed674d57c41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXp6JTIwbXVzaWNpYW4lMjBzYXhvcGhvbmV8ZW58MXx8fHwxNzcxMTczMTA0fDA&ixlib=rb-4.1.0&q=80&w=400',
        monthlyListeners: 28900,
        joinedDate: '2026-01-25'
    },
    {
        id: '6',
        name: 'Soulé',
        genre: 'R&B',
        currentPrice: 27.85,
        priceChange24h: 9.8,
        totalShares: 10000,
        availableShares: 3600,
        bio: 'Silky smooth vocals with neo-soul vibes. Drawing comparisons to classic R&B while creating something fresh.',
        imageUrl: 'https://images.unsplash.com/photo-1645056094885-4a9360f33289?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxybmIlMjBzb3VsJTIwc2luZ2VyJTIwc3RhZ2V8ZW58MXx8fHwxNzcxMjAzNTcwfDA&ixlib=rb-4.1.0&q=80&w=400',
        monthlyListeners: 89300,
        joinedDate: '2026-01-18'
    },
    {
        id: '7',
        name: 'KID CIPHER',
        genre: 'Hip-Hop',
        currentPrice: 19.60,
        priceChange24h: 18.2,
        totalShares: 10000,
        availableShares: 4100,
        bio: 'Next generation lyricist with complex wordplay. Started in battle rap and bringing that energy to recordings.',
        imageUrl: 'https://images.unsplash.com/photo-1585848061832-19e2fd237f8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bmRlcmdyb3VuZCUyMHJhcHBlciUyMHN0dWRpb3xlbnwxfHx8fDE3NzEyMDM1NzB8MA&ixlib=rb-4.1.0&q=80&w=400',
        monthlyListeners: 52700,
        joinedDate: '2026-02-05'
    },
    {
        id: '8',
        name: 'GREY AREA',
        genre: 'Alternative',
        currentPrice: 16.25,
        priceChange24h: -1.5,
        totalShares: 10000,
        availableShares: 5200,
        bio: 'Experimental alternative rock pushing sonic boundaries. Creating atmospheric soundscapes with emotional depth.',
        imageUrl: 'https://images.unsplash.com/photo-1597386673712-83fb0ab76ea7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbHRlcm5hdGl2ZSUyMGFydGlzdCUyMG11c2ljfGVufDF8fHx8MTc3MTIwMzU3MXww&ixlib=rb-4.1.0&q=80&w=400',
        monthlyListeners: 41200,
        joinedDate: '2026-02-08'
    }
];

let portfolio = [
    { artistId: '1', shares: 50, avgBuyPrice: 20.00 },
    { artistId: '3', shares: 25, avgBuyPrice: 28.50 },
    { artistId: '6', shares: 30, avgBuyPrice: 25.00 }
];

let transactions = [
    { id: '1', artistId: '1', artistName: 'VORTEX', type: 'buy', shares: 50, pricePerShare: 20.00, timestamp: '2026-02-10T10:30:00Z' },
    { id: '2', artistId: '3', artistName: 'NEONWAV3', type: 'buy', shares: 25, pricePerShare: 28.50, timestamp: '2026-02-12T14:20:00Z' },
    { id: '3', artistId: '6', artistName: 'Soulé', type: 'buy', shares: 30, pricePerShare: 25.00, timestamp: '2026-02-14T09:15:00Z' }
];

let currentTransaction = null;
const userBalance = 5000;

// Navigation Functions
function showPage(pageName) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Show selected page
    document.getElementById(pageName).classList.add('active');

    // Update nav links
    document.querySelectorAll('.nav-link, .mobile-link').forEach(link => {
        link.classList.remove('active');
    });

    // Close mobile menu
    document.getElementById('mobileMenu').classList.remove('active');

    // Load page content
    if (pageName === 'dashboard') {
        filterArtists('trending');
    } else if (pageName === 'discover') {
        applyFilters();
    } else if (pageName === 'portfolio') {
        loadPortfolio();
    }
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('active');
}

// Artist Card Creation
function createArtistCard(artist) {
    const isPositive = artist.priceChange24h >= 0;
    
    return `
        <div class="artist-card" onclick="showArtistDetail('${artist.id}')">
            <div class="artist-image">
                <img src="${artist.imageUrl}" alt="${artist.name}">
                <span class="genre-badge">${artist.genre}</span>
            </div>
            <div class="artist-info">
                <h3 class="artist-name">${artist.name}</h3>
                <div class="artist-listeners">
                    <i class="fas fa-users"></i>
                    <span>${artist.monthlyListeners.toLocaleString()} monthly listeners</span>
                </div>
                <div class="price-info">
                    <div>
                        <div class="price-main">$${artist.currentPrice.toFixed(2)}</div>
                        <div class="price-label">per share</div>
                    </div>
                    <div class="price-change ${isPositive ? 'positive' : 'negative'}">
                        <i class="fas fa-${isPositive ? 'arrow-up' : 'arrow-down'}"></i>
                        <span>${isPositive ? '+' : ''}${artist.priceChange24h.toFixed(1)}%</span>
                    </div>
                </div>
                <div class="artist-availability">
                    <span>Available shares</span>
                    <span>${artist.availableShares.toLocaleString()}</span>
                </div>
            </div>
        </div>
    `;
}

// Dashboard Functions
function filterArtists(category) {
    let filtered = [...artists];

    if (category === 'trending') {
        filtered.sort((a, b) => Math.abs(b.priceChange24h) - Math.abs(a.priceChange24h));
    } else if (category === 'hot') {
        filtered = filtered.filter(a => a.priceChange24h > 0);
        filtered.sort((a, b) => b.priceChange24h - a.priceChange24h);
    } else if (category === 'new') {
        filtered.sort((a, b) => new Date(b.joinedDate) - new Date(a.joinedDate));
    }

    filtered = filtered.slice(0, 6);

    const grid = document.getElementById('artistsGrid');
    grid.innerHTML = filtered.map(artist => createArtistCard(artist)).join('');

    // Update active tab
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.closest('.tab-btn').classList.add('active');
}

// Discover Functions
function applyFilters() {
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();
    const genreFilter = document.getElementById('genreFilter').value;
    const sortBy = document.getElementById('sortFilter').value;

    let filtered = [...artists];

    // Search filter
    if (searchQuery) {
        filtered = filtered.filter(artist =>
            artist.name.toLowerCase().includes(searchQuery) ||
            artist.genre.toLowerCase().includes(searchQuery)
        );
    }

    // Genre filter
    if (genreFilter !== 'all') {
        filtered = filtered.filter(artist => artist.genre === genreFilter);
    }

    // Sort
    if (sortBy === 'price') {
        filtered.sort((a, b) => b.currentPrice - a.currentPrice);
    } else if (sortBy === 'change') {
        filtered.sort((a, b) => Math.abs(b.priceChange24h) - Math.abs(a.priceChange24h));
    } else if (sortBy === 'listeners') {
        filtered.sort((a, b) => b.monthlyListeners - a.monthlyListeners);
    }

    const grid = document.getElementById('discoverGrid');
    const resultsCount = document.getElementById('resultsCount');

    resultsCount.textContent = `Showing ${filtered.length} ${filtered.length === 1 ? 'artist' : 'artists'}`;

    if (filtered.length > 0) {
        grid.innerHTML = filtered.map(artist => createArtistCard(artist)).join('');
    } else {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem;">
                <p style="color: #6b7280; font-size: 1.125rem;">No artists found matching your criteria</p>
                <button onclick="clearFilters()" style="margin-top: 1rem; color: #9333ea; font-weight: 500; background: none; border: none; cursor: pointer;">
                    Clear filters
                </button>
            </div>
        `;
    }
}

function clearFilters() {
    document.getElementById('searchInput').value = '';
    document.getElementById('genreFilter').value = 'all';
    applyFilters();
}

// Portfolio Functions
function loadPortfolio() {
    calculatePortfolioMetrics();
    loadHoldings();
    loadTransactions();
}

function calculatePortfolioMetrics() {
    let totalInvested = 0;
    let totalCurrent = 0;

    portfolio.forEach(item => {
        const artist = artists.find(a => a.id === item.artistId);
        if (artist) {
            totalInvested += item.shares * item.avgBuyPrice;
            totalCurrent += item.shares * artist.currentPrice;
        }
    });

    const totalReturn = totalCurrent - totalInvested;
    const returnPercentage = totalInvested > 0 ? (totalReturn / totalInvested) * 100 : 0;

    document.getElementById('portfolioValue').textContent = `$${totalCurrent.toFixed(2)}`;
    document.getElementById('portfolioInvested').textContent = `$${totalInvested.toFixed(2)}`;
    
    const returnEl = document.getElementById('portfolioReturn');
    const returnPercentEl = document.getElementById('portfolioReturnPercent');
    
    returnEl.textContent = `${totalReturn >= 0 ? '+' : ''}$${totalReturn.toFixed(2)}`;
    returnEl.className = `stat-value ${totalReturn >= 0 ? 'green' : 'red'}`;
    
    returnPercentEl.textContent = `${totalReturn >= 0 ? '+' : ''}${returnPercentage.toFixed(2)}%`;
    returnPercentEl.className = `return-percent ${totalReturn >= 0 ? '' : 'red'}`;
}

function loadHoldings() {
    const tbody = document.getElementById('holdingsTableBody');
    
    tbody.innerHTML = portfolio.map(item => {
        const artist = artists.find(a => a.id === item.artistId);
        if (!artist) return '';

        const currentValue = item.shares * artist.currentPrice;
        const investedValue = item.shares * item.avgBuyPrice;
        const totalReturn = currentValue - investedValue;
        const returnPercentage = (totalReturn / investedValue) * 100;
        const isPositive = totalReturn >= 0;

        return `
            <tr>
                <td>
                    <div class="artist-cell">
                        <img src="${artist.imageUrl}" alt="${artist.name}">
                        <div class="artist-cell-info">
                            <p>${artist.name}</p>
                            <p>${artist.genre}</p>
                        </div>
                    </div>
                </td>
                <td>${item.shares}</td>
                <td>$${item.avgBuyPrice.toFixed(2)}</td>
                <td>$${artist.currentPrice.toFixed(2)}</td>
                <td><strong>$${currentValue.toFixed(2)}</strong></td>
                <td>
                    <div class="return-cell ${isPositive ? 'positive' : 'negative'}">
                        <i class="fas fa-arrow-${isPositive ? 'up' : 'down'}"></i>
                        <span><strong>${isPositive ? '+' : ''}$${totalReturn.toFixed(2)}</strong> (${isPositive ? '+' : ''}${returnPercentage.toFixed(1)}%)</span>
                    </div>
                </td>
                <td>
                    <div class="action-buttons">
                        <button class="btn-buy" onclick="openTransactionModal('${artist.id}', 'buy')">Buy</button>
                        <button class="btn-sell" onclick="openTransactionModal('${artist.id}', 'sell')">Sell</button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}

function loadTransactions() {
    const list = document.getElementById('transactionsList');
    
    list.innerHTML = [...transactions].reverse().map(transaction => {
        return `
            <div class="transaction-item">
                <div class="transaction-left">
                    <div class="transaction-icon ${transaction.type}">
                        <i class="fas fa-arrow-${transaction.type === 'buy' ? 'up' : 'down'}-right"></i>
                    </div>
                    <div class="transaction-details">
                        <p>${transaction.type === 'buy' ? 'Bought' : 'Sold'} ${transaction.shares} shares</p>
                        <p>${transaction.artistName}</p>
                    </div>
                </div>
                <div class="transaction-right">
                    <p>$${(transaction.shares * transaction.pricePerShare).toFixed(2)}</p>
                    <div class="transaction-date">
                        <i class="fas fa-clock"></i>
                        <span>${new Date(transaction.timestamp).toLocaleDateString()}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Artist Detail Modal
function showArtistDetail(artistId) {
    const artist = artists.find(a => a.id === artistId);
    if (!artist) return;

    const isPositive = artist.priceChange24h >= 0;
    
    const content = `
        <div class="artist-detail-header">
            <img src="${artist.imageUrl}" alt="${artist.name}" class="artist-detail-image">
            <div class="artist-detail-info">
                <span class="artist-detail-genre">${artist.genre}</span>
                <h1 class="artist-detail-name">${artist.name}</h1>
                <div class="artist-detail-meta">
                    <div class="artist-detail-meta-item">
                        <i class="fas fa-users"></i>
                        <span>${artist.monthlyListeners.toLocaleString()} listeners</span>
                    </div>
                    <div class="artist-detail-meta-item">
                        <i class="fas fa-calendar"></i>
                        <span>Joined ${new Date(artist.joinedDate).toLocaleDateString()}</span>
                    </div>
                </div>
                <p class="artist-detail-bio">${artist.bio}</p>
                <div class="artist-detail-price-section">
                    <div>
                        <div class="artist-detail-price">$${artist.currentPrice.toFixed(2)}</div>
                        <div class="artist-detail-change price-change ${isPositive ? 'positive' : 'negative'}">
                            <i class="fas fa-arrow-${isPositive ? 'up' : 'down'}"></i>
                            <span>${isPositive ? '+' : ''}${artist.priceChange24h.toFixed(1)}% (24h)</span>
                        </div>
                    </div>
                    <button class="buy-btn" onclick="openTransactionModal('${artist.id}', 'buy')">
                        <i class="fas fa-shopping-cart"></i>
                        <span>Buy Shares</span>
                    </button>
                </div>
                <div class="artist-detail-shares">
                    <div class="share-stat">
                        <p>Total Shares</p>
                        <p>${artist.totalShares.toLocaleString()}</p>
                    </div>
                    <div class="share-stat">
                        <p>Available Shares</p>
                        <p>${artist.availableShares.toLocaleString()}</p>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.getElementById('artistDetailContent').innerHTML = content;
    document.getElementById('artistModal').classList.add('active');
}

function closeArtistModal() {
    document.getElementById('artistModal').classList.remove('active');
}

// Transaction Modal
function openTransactionModal(artistId, type) {
    const artist = artists.find(a => a.id === artistId);
    if (!artist) return;

    currentTransaction = { artist, type };

    // Close artist detail modal if open
    closeArtistModal();

    const modal = document.getElementById('transactionModal');
    const title = document.getElementById('transactionModalTitle');
    const artistInfo = document.getElementById('transactionArtistInfo');
    const confirmBtn = document.getElementById('confirmTransactionBtn');

    title.textContent = type === 'buy' ? 'Buy Shares' : 'Sell Shares';
    
    artistInfo.innerHTML = `
        <img src="${artist.imageUrl}" alt="${artist.name}">
        <div class="artist-info-modal-text">
            <h3>${artist.name}</h3>
            <p>${artist.genre}</p>
            <p class="modal-price">$${artist.currentPrice.toFixed(2)} / share</p>
        </div>
    `;

    if (type === 'sell') {
        const holding = portfolio.find(p => p.artistId === artistId);
        const maxShares = holding ? holding.shares : 0;
        document.getElementById('sharesInput').max = maxShares;
        document.getElementById('availableShares').textContent = `Available: ${maxShares} shares (Your holdings)`;
        confirmBtn.textContent = 'Confirm Sale';
        confirmBtn.className = 'btn-primary sell';
    } else {
        document.getElementById('sharesInput').max = artist.availableShares;
        document.getElementById('availableShares').textContent = `Available: ${artist.availableShares.toLocaleString()} shares`;
        confirmBtn.textContent = 'Confirm Purchase';
        confirmBtn.className = 'btn-primary';
    }

    document.getElementById('sharesInput').value = 1;
    updateTransactionTotal();

    modal.classList.add('active');
}

function closeTransactionModal() {
    document.getElementById('transactionModal').classList.remove('active');
    currentTransaction = null;
}

function updateTransactionTotal() {
    if (!currentTransaction) return;

    const shares = parseInt(document.getElementById('sharesInput').value) || 1;
    const totalCost = shares * currentTransaction.artist.currentPrice;
    const maxShares = currentTransaction.type === 'sell' 
        ? (portfolio.find(p => p.artistId === currentTransaction.artist.id)?.shares || 0)
        : currentTransaction.artist.availableShares;

    document.getElementById('totalCost').textContent = `$${totalCost.toFixed(2)}`;

    const warningBox = document.getElementById('transactionWarning');
    const confirmBtn = document.getElementById('confirmTransactionBtn');

    if (currentTransaction.type === 'buy' && totalCost > userBalance) {
        warningBox.innerHTML = '<i class="fas fa-exclamation-circle"></i> Insufficient balance. You need $' + (totalCost - userBalance).toFixed(2) + ' more.';
        warningBox.style.display = 'flex';
        confirmBtn.disabled = true;
    } else if (shares > maxShares || shares < 1) {
        warningBox.innerHTML = '<i class="fas fa-exclamation-circle"></i> Invalid number of shares.';
        warningBox.style.display = 'flex';
        confirmBtn.disabled = true;
    } else {
        warningBox.style.display = 'none';
        confirmBtn.disabled = false;
    }
}

function confirmTransaction() {
    if (!currentTransaction) return;

    const shares = parseInt(document.getElementById('sharesInput').value);
    const { artist, type } = currentTransaction;

    // Add transaction to history
    const newTransaction = {
        id: Date.now().toString(),
        artistId: artist.id,
        artistName: artist.name,
        type: type,
        shares: shares,
        pricePerShare: artist.currentPrice,
        timestamp: new Date().toISOString()
    };
    transactions.push(newTransaction);

    // Update portfolio
    const existingHolding = portfolio.find(p => p.artistId === artist.id);
    
    if (type === 'buy') {
        if (existingHolding) {
            const totalCost = (existingHolding.shares * existingHolding.avgBuyPrice) + (shares * artist.currentPrice);
            existingHolding.shares += shares;
            existingHolding.avgBuyPrice = totalCost / existingHolding.shares;
        } else {
            portfolio.push({
                artistId: artist.id,
                shares: shares,
                avgBuyPrice: artist.currentPrice
            });
        }
    } else if (type === 'sell' && existingHolding) {
        existingHolding.shares -= shares;
        if (existingHolding.shares <= 0) {
            portfolio = portfolio.filter(p => p.artistId !== artist.id);
        }
    }

    closeTransactionModal();
    
    // Refresh portfolio if on that page
    if (document.getElementById('portfolio').classList.contains('active')) {
        loadPortfolio();
    }

    alert(`Successfully ${type === 'buy' ? 'bought' : 'sold'} ${shares} shares of ${artist.name}!`);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    showPage('dashboard');
});

// Close modals when clicking outside
window.onclick = function(event) {
    const artistModal = document.getElementById('artistModal');
    const transactionModal = document.getElementById('transactionModal');
    
    if (event.target === artistModal) {
        closeArtistModal();
    }
    if (event.target === transactionModal) {
        closeTransactionModal();
    }
}