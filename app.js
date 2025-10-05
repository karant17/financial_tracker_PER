// Complete Financial Tracker Pro Application - 2025
class FinancialTracker {
    constructor() {
        // Load data from localStorage or use default data
        this.data = this.loadData() || {
            "profiles": [
                {
                    "id": "profile_family",
                    "name": "Karan & Family",
                    "description": "Primary family financial account",
                    "created_date": "2025-01-01",
                    "is_active": true,
                    "is_default": true,
                    "color": "#667eea",
                    "icon": "👨‍👩‍👧‍👦"
                },
                {
                    "id": "profile_personal",
                    "name": "Karan Personal",
                    "description": "Personal financial tracking",
                    "created_date": "2025-01-01",
                    "is_active": true,
                    "is_default": false,
                    "color": "#10b981",
                    "icon": "👤"
                },
                {
                    "id": "profile_business",
                    "name": "Side Business",
                    "description": "Freelance and business finances",
                    "created_date": "2025-01-01",
                    "is_active": false,
                    "is_default": false,
                    "color": "#f59e0b",
                    "icon": "💼"
                }
            ],
            "current_profile": "profile_family",
            "dropdowns": {
                "income_types": ["Salary", "Freelance", "Bonus", "Investment", "Rental Income", "Business Income", "Commission", "Dividend", "Interest"],
                "income_sources": ["Karan", "Spouse", "Side Business", "Investments", "Rental Property"],
                "income_payment_modes": ["Bank Transfer", "UPI", "Cash", "Cheque", "NEFT", "RTGS"],
                "expense_categories": ["Groceries", "Fuel", "Food & Dining", "Transportation", "Entertainment", "Healthcare", "Utilities", "Education", "Shopping", "Travel", "Insurance", "Maintenance"],
                "expense_payment_modes": ["Credit Card", "UPI", "Cash", "Debit Card", "Net Banking", "NEFT", "Cheque"],
                "loan_types": ["Car Loan", "Home Loan", "Personal Loan", "Education Loan", "Business Loan", "Credit Card Loan", "Gold Loan"],
                "months": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                "frequency": ["Daily", "Weekly", "Monthly", "Quarterly", "Half-yearly", "Yearly", "One-time"],
                "priority": ["High", "Medium", "Low"],
                "credit_card_types": ["Visa", "Mastercard", "Rupay", "American Express", "Diners Club"],
                "account_types": ["Savings", "Current", "Credit Card", "FD", "RD", "Investment"],
                "banks": ["SBI", "HDFC", "ICICI", "Axis", "Kotak", "PNB", "BOB", "Canara", "Yes Bank"]
            },
            "income": [
                {
                    "id": "income_1",
                    "Date": "2025-01-01",
                    "Year": 2025,
                    "Month": "January",
                    "Source Name": "Karan",
                    "Income Type": "Salary",
                    "Mode of Receipt": "Bank Transfer",
                    "Amount": 60000,
                    "profile_id": "profile_family",
                    "account_id": "savings_sbi_primary"
                },
                {
                    "id": "income_2",
                    "Date": "2025-01-15",
                    "Year": 2025,
                    "Month": "January",
                    "Source Name": "Spouse",
                    "Income Type": "Freelance",
                    "Mode of Receipt": "UPI",
                    "Amount": 20000,
                    "profile_id": "profile_family",
                    "account_id": "savings_sbi_primary"
                },
                {
                    "id": "income_3",
                    "Date": "2025-02-01",
                    "Year": 2025,
                    "Month": "February",
                    "Source Name": "Karan",
                    "Income Type": "Salary",
                    "Mode of Receipt": "Bank Transfer",
                    "Amount": 60000,
                    "profile_id": "profile_family",
                    "account_id": "savings_sbi_primary"
                },
                {
                    "id": "income_4",
                    "Date": "2025-02-20",
                    "Year": 2025,
                    "Month": "February",
                    "Source Name": "Spouse",
                    "Income Type": "Freelance",
                    "Mode of Receipt": "UPI",
                    "Amount": 25000,
                    "profile_id": "profile_family",
                    "account_id": "savings_sbi_primary"
                }
            ],
            "expenses": [
                {
                    "id": "expense_1",
                    "Date": "2025-01-05",
                    "Year": 2025,
                    "Month": "January",
                    "Category": "Groceries",
                    "Description": "Supermarket",
                    "Payment Mode": "UPI",
                    "Amount": 5000,
                    "profile_id": "profile_family",
                    "account_id": "savings_sbi_primary"
                },
                {
                    "id": "expense_2",
                    "Date": "2025-01-10",
                    "Year": 2025,
                    "Month": "January",
                    "Category": "Fuel",
                    "Description": "Petrol Pump",
                    "Payment Mode": "Credit Card",
                    "Amount": 3000,
                    "profile_id": "profile_family",
                    "account_id": "cc_hdfc_regalia"
                },
                {
                    "id": "expense_3",
                    "Date": "2025-02-07",
                    "Year": 2025,
                    "Month": "February",
                    "Category": "Groceries",
                    "Description": "Supermarket",
                    "Payment Mode": "UPI",
                    "Amount": 6000,
                    "profile_id": "profile_family",
                    "account_id": "savings_sbi_primary"
                },
                {
                    "id": "expense_4",
                    "Date": "2025-02-14",
                    "Year": 2025,
                    "Month": "February",
                    "Category": "Fuel",
                    "Description": "Petrol Pump",
                    "Payment Mode": "Credit Card",
                    "Amount": 3500,
                    "profile_id": "profile_family",
                    "account_id": "cc_hdfc_regalia"
                }
            ],
            "loans": [
                {
                    "id": "loan_1",
                    "Loan Name": "Car Loan",
                    "Principal": 600000,
                    "Interest Rate (%)": 9,
                    "Tenure (Months)": 60,
                    "Start Date": "2025-01-07",
                    "Cutoff Day": 7,
                    "EMI": 12455.01,
                    "profile_id": "profile_family"
                }
            ],
            "accounts": [
                {
                    "id": "cc_hdfc_regalia",
                    "account_name": "HDFC Regalia Credit Card",
                    "account_type": "Credit Card",
                    "bank_name": "HDFC",
                    "card_type": "Visa",
                    "account_number": "****1234",
                    "credit_limit": 200000,
                    "current_balance": 8500,
                    "available_credit": 191500,
                    "billing_cycle_start": 1,
                    "billing_cycle_end": 30,
                    "due_date": 20,
                    "minimum_due": 850,
                    "reward_points": 2500,
                    "annual_fee": 2500,
                    "interest_rate": 42.0,
                    "created_date": "2025-01-01",
                    "profile_id": "profile_family",
                    "is_active": true
                },
                {
                    "id": "savings_sbi_primary",
                    "account_name": "SBI Primary Savings",
                    "account_type": "Savings",
                    "bank_name": "SBI",
                    "card_type": null,
                    "account_number": "****5678",
                    "credit_limit": null,
                    "current_balance": 127500,
                    "available_credit": null,
                    "billing_cycle_start": null,
                    "billing_cycle_end": null,
                    "due_date": null,
                    "minimum_due": null,
                    "reward_points": null,
                    "annual_fee": 0,
                    "interest_rate": 3.0,
                    "created_date": "2025-01-01",
                    "profile_id": "profile_family",
                    "is_active": true
                }
            ],
            "credit_card_transactions": [
                {
                    "id": "cct_001",
                    "account_id": "cc_hdfc_regalia",
                    "transaction_date": "2025-01-10",
                    "description": "HP Petrol Pump",
                    "amount": 3000,
                    "transaction_type": "debit",
                    "category": "Fuel",
                    "merchant": "HP Petrol Pump",
                    "is_reconciled": true,
                    "expense_id": "expense_2",
                    "profile_id": "profile_family"
                },
                {
                    "id": "cct_002",
                    "account_id": "cc_hdfc_regalia",
                    "transaction_date": "2025-02-14",
                    "description": "Bharat Petroleum",
                    "amount": 3500,
                    "transaction_type": "debit",
                    "category": "Fuel",
                    "merchant": "Bharat Petroleum",
                    "is_reconciled": true,
                    "expense_id": "expense_4",
                    "profile_id": "profile_family"
                },
                {
                    "id": "cct_003",
                    "account_id": "cc_hdfc_regalia",
                    "transaction_date": "2025-01-25",
                    "description": "Payment Received",
                    "amount": 10000,
                    "transaction_type": "credit",
                    "category": "Payment",
                    "merchant": "HDFC NetBanking",
                    "is_reconciled": false,
                    "expense_id": null,
                    "profile_id": "profile_family"
                }
            ]
        };

        this.currentEditIndex = null;
        this.currentEditType = null;
        this.chart = null;
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.confirmCallback = null;
        
        this.init();
    }

    // Initialization
    init() {
        this.setupTheme();
        this.setupEventListeners();
        this.loadProfile(this.data.current_profile);
        this.updateDashboard();
        this.renderIncomeTable();
        this.renderExpenseTable();
        this.renderLoansGrid();
        this.renderAccountsSummary();
        this.renderCreditCards();
        this.renderBankAccounts();
        this.renderReconciliation();
        this.renderMasterPage();
        this.updateChart();
        this.renderProfileSelector();
    }

    // Theme Management
    setupTheme() {
        document.body.setAttribute('data-theme', this.currentTheme);
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        document.body.setAttribute('data-theme', this.currentTheme);
        localStorage.setItem('theme', this.currentTheme);
        this.updateChart();
        this.showToast(`Switched to ${this.currentTheme} theme`, 'success');
    }

    // Data Management
    loadData() {
        try {
            const saved = localStorage.getItem('financial_tracker_data');
            return saved ? JSON.parse(saved) : null;
        } catch (error) {
            console.error('Error loading data:', error);
            return null;
        }
    }

    saveData() {
        try {
            localStorage.setItem('financial_tracker_data', JSON.stringify(this.data));
            return true;
        } catch (error) {
            console.error('Error saving data:', error);
            this.showToast('Error saving data', 'error');
            return false;
        }
    }

    // Profile Management
    getCurrentProfileData(dataType) {
        if (!dataType || !this.data[dataType]) return [];
        return this.data[dataType].filter(item => 
            item.profile_id === this.data.current_profile
        );
    }

    loadProfile(profileId) {
        this.data.current_profile = profileId;
        const profile = this.data.profiles.find(p => p.id === profileId);
        
        if (profile) {
            document.getElementById('profile-name').textContent = profile.name;
            document.getElementById('profile-icon').textContent = profile.icon;
        }

        this.updateAllViews();
        this.saveData();
    }

    renderProfileSelector() {
        const profileList = document.getElementById('profile-list');
        if (!profileList) return;

        const html = this.data.profiles.map(profile => `
            <div class="profile-item ${profile.id === this.data.current_profile ? 'active' : ''}" 
                 onclick="financialTracker.loadProfile('${profile.id}')">
                <span class="profile-icon">${profile.icon}</span>
                <div class="profile-info">
                    <div class="profile-name">${profile.name}</div>
                    <div class="profile-description">${profile.description}</div>
                </div>
            </div>
        `).join('');
        
        profileList.innerHTML = html;
    }

    // Event Listeners
    setupEventListeners() {
        // Profile selector
        const profileBtn = document.getElementById('profile-btn');
        const profileDropdown = document.getElementById('profile-dropdown');
        
        if (profileBtn && profileDropdown) {
            profileBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                profileBtn.classList.toggle('open');
                profileDropdown.classList.toggle('open');
            });

            document.addEventListener('click', () => {
                profileBtn.classList.remove('open');
                profileDropdown.classList.remove('open');
            });
        }

        // Navigation
        document.querySelectorAll('.nav-pill').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const section = e.currentTarget.dataset.section;
                this.showSection(section);
            });
        });

        // Add buttons
        document.getElementById('add-income-btn')?.addEventListener('click', () => this.showIncomeModal());
        document.getElementById('add-expense-btn')?.addEventListener('click', () => this.showExpenseModal());
        document.getElementById('add-loan-btn')?.addEventListener('click', () => this.showLoanModal());
        document.getElementById('add-account-btn')?.addEventListener('click', () => this.showAccountModal());

        // Modal events
        document.getElementById('modal-close')?.addEventListener('click', () => this.hideModal());
        document.getElementById('modal-cancel')?.addEventListener('click', () => this.hideModal());
        document.getElementById('modal-save')?.addEventListener('click', () => this.saveModalData());
        document.getElementById('modal-overlay')?.addEventListener('click', (e) => {
            if (e.target === e.currentTarget) this.hideModal();
        });

        // Confirm modal events
        document.getElementById('confirm-cancel')?.addEventListener('click', () => this.hideConfirmModal());
        document.getElementById('confirm-ok')?.addEventListener('click', () => this.executeConfirmAction());

        // Tab events
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const tabId = e.currentTarget.dataset.tab;
                this.showTab(e.currentTarget, tabId);
            });
        });

        // FAB events
        const fab = document.getElementById('fab');
        const fabMenu = document.getElementById('fab-menu');
        
        if (fab && fabMenu) {
            fab.addEventListener('click', () => {
                fabMenu.classList.toggle('open');
            });

            document.querySelectorAll('.fab-item').forEach(item => {
                item.addEventListener('click', (e) => {
                    const action = e.currentTarget.dataset.action;
                    fabMenu.classList.remove('open');
                    
                    if (action === 'add-income') this.showIncomeModal();
                    else if (action === 'add-expense') this.showExpenseModal();
                    else if (action === 'add-account') this.showAccountModal();
                });
            });
        }
    }

    // Navigation
    showSection(sectionName) {
        // Update nav buttons
        document.querySelectorAll('.nav-pill').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-section="${sectionName}"]`)?.classList.add('active');

        // Show section
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(sectionName)?.classList.add('active');

        // Update content based on section
        if (sectionName === 'dashboard') {
            this.updateDashboard();
            this.updateChart();
        } else if (sectionName === 'accounts') {
            this.renderAccountsSummary();
            this.renderCreditCards();
            this.renderBankAccounts();
            this.renderReconciliation();
        } else if (sectionName === 'income') {
            this.renderIncomeTable();
        } else if (sectionName === 'expenses') {
            this.renderExpenseTable();
        } else if (sectionName === 'loans') {
            this.renderLoansGrid();
        } else if (sectionName === 'master') {
            this.renderMasterPage();
        }
    }

    showTab(tabButton, tabId) {
        // Update tab buttons
        tabButton.parentElement.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        tabButton.classList.add('active');

        // Show tab content
        const tabContainer = tabButton.closest('.tabs-container');
        tabContainer.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        tabContainer.querySelector(`#${tabId}`)?.classList.add('active');
    }

    // Dashboard Updates
    updateDashboard() {
        const totals = this.calculateTotals();
        
        document.getElementById('total-income').textContent = `₹${totals.income.toLocaleString()}`;
        document.getElementById('total-expenses').textContent = `₹${totals.expenses.toLocaleString()}`;
        document.getElementById('total-emis').textContent = `₹${totals.emis.toLocaleString()}`;
        document.getElementById('net-savings').textContent = `₹${totals.savings.toLocaleString()}`;
        
        // Add color coding for savings
        const savingsElement = document.getElementById('net-savings');
        if (savingsElement) {
            if (totals.savings > 0) {
                savingsElement.style.color = '#10b981';
            } else {
                savingsElement.style.color = '#ef4444';
            }
        }

        this.renderRecentActivity();
    }

    calculateTotals() {
        const income = this.getCurrentProfileData('income').reduce((sum, item) => sum + item.Amount, 0);
        const expenses = this.getCurrentProfileData('expenses').reduce((sum, item) => sum + item.Amount, 0);
        const emis = this.getCurrentProfileData('loans').reduce((sum, loan) => sum + (loan.EMI || 0), 0);
        const savings = income - expenses - emis;
        
        return { income, expenses, emis, savings };
    }

    renderRecentActivity() {
        const activityContainer = document.getElementById('recent-activity');
        if (!activityContainer) return;

        const incomeData = this.getCurrentProfileData('income').map(item => ({...item, type: 'income'}));
        const expenseData = this.getCurrentProfileData('expenses').map(item => ({...item, type: 'expense'}));
        
        const recent = [...incomeData, ...expenseData]
            .sort((a, b) => new Date(b.Date) - new Date(a.Date))
            .slice(0, 5);

        const html = recent.map(item => `
            <div class="activity-item">
                <div class="activity-icon">
                    ${item.type === 'income' ? '💰' : '💸'}
                </div>
                <div class="activity-content">
                    <div class="activity-title">
                        ${item.type === 'income' ? item['Source Name'] : item.Category}
                    </div>
                    <div class="activity-details">
                        ${new Date(item.Date).toLocaleDateString()} • ${item.type === 'income' ? item['Mode of Receipt'] : item['Payment Mode']}
                    </div>
                </div>
                <div class="activity-amount ${item.type}">
                    ${item.type === 'income' ? '+' : '-'}₹${item.Amount.toLocaleString()}
                </div>
            </div>
        `).join('');

        activityContainer.innerHTML = html || '<div class="activity-item">No recent activity</div>';
    }

    // Chart Management
    updateChart() {
        const ctx = document.getElementById('monthly-chart')?.getContext('2d');
        if (!ctx) return;

        if (this.chart) {
            this.chart.destroy();
        }

        const monthlyData = this.getMonthlyData();
        const isDark = this.currentTheme === 'dark';
        
        this.chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: monthlyData.labels,
                datasets: [
                    {
                        label: 'Income',
                        data: monthlyData.income,
                        borderColor: '#10b981',
                        backgroundColor: 'rgba(16, 185, 129, 0.1)',
                        fill: true,
                        tension: 0.4,
                        pointBackgroundColor: '#10b981',
                        pointBorderColor: '#ffffff',
                        pointRadius: 6,
                        pointHoverRadius: 8
                    },
                    {
                        label: 'Expenses',
                        data: monthlyData.expenses,
                        borderColor: '#ef4444',
                        backgroundColor: 'rgba(239, 68, 68, 0.1)',
                        fill: true,
                        tension: 0.4,
                        pointBackgroundColor: '#ef4444',
                        pointBorderColor: '#ffffff',
                        pointRadius: 6,
                        pointHoverRadius: 8
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            color: isDark ? '#f8fafc' : '#0f172a',
                            usePointStyle: true,
                            padding: 20
                        }
                    },
                    tooltip: {
                        backgroundColor: isDark ? '#1f2937' : '#ffffff',
                        titleColor: isDark ? '#f8fafc' : '#0f172a',
                        bodyColor: isDark ? '#f8fafc' : '#0f172a',
                        borderColor: isDark ? '#374151' : '#e5e7eb',
                        borderWidth: 1,
                        cornerRadius: 8,
                        callbacks: {
                            label: function(context) {
                                return context.dataset.label + ': ₹' + context.parsed.y.toLocaleString();
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: isDark ? '#9ca3af' : '#6b7280',
                            callback: function(value) {
                                return '₹' + value.toLocaleString();
                            }
                        },
                        grid: {
                            color: isDark ? '#374151' : '#f3f4f6'
                        },
                        border: {
                            color: isDark ? '#374151' : '#e5e7eb'
                        }
                    },
                    x: {
                        ticks: {
                            color: isDark ? '#9ca3af' : '#6b7280'
                        },
                        grid: {
                            color: isDark ? '#374151' : '#f3f4f6'
                        },
                        border: {
                            color: isDark ? '#374151' : '#e5e7eb'
                        }
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index'
                }
            }
        });
    }

    getMonthlyData() {
        const monthlyIncome = {};
        const monthlyExpenses = {};
        
        this.getCurrentProfileData('income').forEach(item => {
            const key = item.Month;
            monthlyIncome[key] = (monthlyIncome[key] || 0) + item.Amount;
        });
        
        this.getCurrentProfileData('expenses').forEach(item => {
            const key = item.Month;
            monthlyExpenses[key] = (monthlyExpenses[key] || 0) + item.Amount;
        });
        
        const monthOrder = ['January', 'February', 'March', 'April', 'May', 'June', 
                          'July', 'August', 'September', 'October', 'November', 'December'];
        
        const allMonths = [...new Set([...Object.keys(monthlyIncome), ...Object.keys(monthlyExpenses)])]
                         .sort((a, b) => monthOrder.indexOf(a) - monthOrder.indexOf(b));
        
        return {
            labels: allMonths,
            income: allMonths.map(key => monthlyIncome[key] || 0),
            expenses: allMonths.map(key => monthlyExpenses[key] || 0)
        };
    }

    // Table Rendering
    renderIncomeTable() {
        const tbody = document.querySelector('#income-table tbody');
        if (!tbody) return;

        const incomeData = this.getCurrentProfileData('income');
        
        const html = incomeData.map((item, index) => `
            <tr>
                <td>${new Date(item.Date).toLocaleDateString()}</td>
                <td>${item['Source Name']}</td>
                <td><span class="badge badge-success">${item['Income Type']}</span></td>
                <td>${item['Mode of Receipt']}</td>
                <td class="amount income">₹${item.Amount.toLocaleString()}</td>
                <td>
                    <button class="btn btn-sm btn-ghost" onclick="financialTracker.editIncome('${item.id}')">✏️</button>
                    <button class="btn btn-sm btn-ghost" onclick="financialTracker.deleteIncome('${item.id}')">🗑️</button>
                </td>
            </tr>
        `).join('');
        
        tbody.innerHTML = html || '<tr><td colspan="6" style="text-align: center; color: var(--text-secondary); padding: 2rem;">No income records found</td></tr>';
    }

    renderExpenseTable() {
        const tbody = document.querySelector('#expense-table tbody');
        if (!tbody) return;

        const expenseData = this.getCurrentProfileData('expenses');
        
        const html = expenseData.map((item, index) => {
            const account = this.data.accounts.find(acc => acc.id === item.account_id);
            const accountName = account ? account.account_name.split(' ')[0] : 'Cash';
            
            return `
                <tr>
                    <td>${new Date(item.Date).toLocaleDateString()}</td>
                    <td><span class="badge badge-danger">${item.Category}</span></td>
                    <td>${item.Description}</td>
                    <td>${item['Payment Mode']}</td>
                    <td><span class="account-badge">${accountName}</span></td>
                    <td class="amount expense">₹${item.Amount.toLocaleString()}</td>
                    <td>
                        <button class="btn btn-sm btn-ghost" onclick="financialTracker.editExpense('${item.id}')">✏️</button>
                        <button class="btn btn-sm btn-ghost" onclick="financialTracker.deleteExpense('${item.id}')">🗑️</button>
                    </td>
                </tr>
            `;
        }).join('');
        
        tbody.innerHTML = html || '<tr><td colspan="7" style="text-align: center; color: var(--text-secondary); padding: 2rem;">No expense records found</td></tr>';
    }

    renderLoansGrid() {
        const loansGrid = document.getElementById('loans-grid');
        if (!loansGrid) return;

        const loansData = this.getCurrentProfileData('loans');
        
        const html = loansData.map((loan, index) => {
            const startDate = new Date(loan['Start Date']);
            const currentDate = new Date();
            const monthsElapsed = Math.max(0, 
                (currentDate.getFullYear() - startDate.getFullYear()) * 12 + 
                (currentDate.getMonth() - startDate.getMonth())
            );
            const remainingMonths = Math.max(0, loan['Tenure (Months)'] - monthsElapsed);
            const remainingAmount = remainingMonths * loan.EMI;
            const progress = ((loan['Tenure (Months)'] - remainingMonths) / loan['Tenure (Months)']) * 100;

            return `
                <div class="loan-card">
                    <div class="card-header">
                        <div>
                            <h3>${loan['Loan Name']}</h3>
                            <p class="loan-bank">${loan.bank_name || 'Bank'}</p>
                        </div>
                        <div class="loan-actions">
                            <button class="btn btn-sm btn-ghost" onclick="financialTracker.editLoan('${loan.id}')">✏️</button>
                            <button class="btn btn-sm btn-ghost" onclick="financialTracker.deleteLoan('${loan.id}')">🗑️</button>
                        </div>
                    </div>
                    
                    <div class="loan-details">
                        <div class="loan-detail">
                            <span class="label">Principal</span>
                            <span class="value">₹${loan.Principal.toLocaleString()}</span>
                        </div>
                        <div class="loan-detail">
                            <span class="label">Interest Rate</span>
                            <span class="value">${loan['Interest Rate (%)']}%</span>
                        </div>
                        <div class="loan-detail">
                            <span class="label">Monthly EMI</span>
                            <span class="value">₹${loan.EMI.toLocaleString()}</span>
                        </div>
                        <div class="loan-detail">
                            <span class="label">Remaining</span>
                            <span class="value">₹${remainingAmount.toLocaleString()}</span>
                        </div>
                    </div>
                    
                    <div class="loan-progress">
                        <div class="progress-label">
                            <span>Progress</span>
                            <span>${Math.round(progress)}%</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${progress}%"></div>
                        </div>
                        <div class="progress-text">
                            ${remainingMonths} months remaining
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        loansGrid.innerHTML = html || '<div style="text-align: center; color: var(--text-secondary); padding: 2rem;">No loans found</div>';
    }

    // Accounts Rendering
    renderAccountsSummary() {
        const container = document.getElementById('accounts-summary');
        if (!container) return;

        const accounts = this.data.accounts.filter(acc => 
            acc.profile_id === this.data.current_profile
        );

        const html = accounts.map(account => {
            const isCredit = account.account_type === 'Credit Card';
            const balance = isCredit ? account.current_balance : account.current_balance;
            const available = isCredit ? account.available_credit : balance;
            
            return `
                <div class="account-summary-card ${account.account_type.toLowerCase().replace(' ', '-')}">
                    <div class="account-header">
                        <div>
                            <h3 class="account-title">${account.account_name}</h3>
                            <p class="account-number">${account.account_number}</p>
                        </div>
                        <div class="account-type-badge">${account.account_type}</div>
                    </div>
                    
                    <div class="account-balance ${isCredit ? 'credit' : 'savings'}">
                        ₹${balance.toLocaleString()}
                    </div>
                    
                    <div class="account-details">
                        <div class="account-detail">
                            <span class="account-detail-label">${isCredit ? 'Available Credit' : 'Balance'}</span>
                            <span class="account-detail-value">₹${available.toLocaleString()}</span>
                        </div>
                        ${isCredit ? `
                            <div class="account-detail">
                                <span class="account-detail-label">Credit Limit</span>
                                <span class="account-detail-value">₹${account.credit_limit.toLocaleString()}</span>
                            </div>
                            <div class="account-detail">
                                <span class="account-detail-label">Due Date</span>
                                <span class="account-detail-value">${account.due_date}th</span>
                            </div>
                            <div class="account-detail">
                                <span class="account-detail-label">Reward Points</span>
                                <span class="account-detail-value">${account.reward_points.toLocaleString()}</span>
                            </div>
                        ` : `
                            <div class="account-detail">
                                <span class="account-detail-label">Interest Rate</span>
                                <span class="account-detail-value">${account.interest_rate}%</span>
                            </div>
                            <div class="account-detail">
                                <span class="account-detail-label">Account Type</span>
                                <span class="account-detail-value">${account.account_type}</span>
                            </div>
                        `}
                    </div>
                </div>
            `;
        }).join('');

        container.innerHTML = html || '<div style="text-align: center; color: var(--text-secondary); padding: 2rem;">No accounts found</div>';
    }

    renderCreditCards() {
        const container = document.getElementById('credit-cards-grid');
        if (!container) return;

        const creditCards = this.data.accounts.filter(acc => 
            acc.account_type === 'Credit Card' && acc.profile_id === this.data.current_profile
        );

        const html = creditCards.map(card => {
            const utilization = (card.current_balance / card.credit_limit) * 100;
            
            return `
                <div class="credit-card" style="background: linear-gradient(135deg, ${this.getCreditCardColor(card.bank_name)} 0%, ${this.getCreditCardColor(card.bank_name)}dd 100%);">
                    <div class="card-header">
                        <div>
                            <div class="card-bank">${card.bank_name}</div>
                            <div class="card-type">${card.card_type}</div>
                        </div>
                        <div class="card-logo">💳</div>
                    </div>
                    
                    <div class="card-number">${card.account_number}</div>
                    
                    <div class="card-details">
                        <div class="card-detail">
                            <div class="card-detail-label">Outstanding</div>
                            <div class="card-detail-value">₹${card.current_balance.toLocaleString()}</div>
                        </div>
                        <div class="card-detail">
                            <div class="card-detail-label">Available</div>
                            <div class="card-detail-value">₹${card.available_credit.toLocaleString()}</div>
                        </div>
                        <div class="card-detail">
                            <div class="card-detail-label">Due Date</div>
                            <div class="card-detail-value">${card.due_date}th</div>
                        </div>
                    </div>
                    
                    <div class="credit-utilization">
                        <div class="utilization-label">
                            <span>Credit Utilization</span>
                            <span>${Math.round(utilization)}%</span>
                        </div>
                        <div class="utilization-bar">
                            <div class="utilization-fill" style="width: ${utilization}%"></div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        container.innerHTML = html || '<div style="text-align: center; color: var(--text-secondary); padding: 2rem;">No credit cards found</div>';
    }

    renderBankAccounts() {
        const container = document.getElementById('bank-accounts-grid');
        if (!container) return;

        const bankAccounts = this.data.accounts.filter(acc => 
            acc.account_type !== 'Credit Card' && acc.profile_id === this.data.current_profile
        );

        const html = bankAccounts.map(account => `
            <div class="bank-account">
                <div class="account-header">
                    <div>
                        <h3>${account.account_name}</h3>
                        <p>${account.bank_name} • ${account.account_number}</p>
                    </div>
                    <div class="account-type-badge">${account.account_type}</div>
                </div>
                
                <div class="account-balance savings">
                    ₹${account.current_balance.toLocaleString()}
                </div>
                
                <div class="account-info">
                    <div class="info-item">
                        <span>Interest Rate</span>
                        <span>${account.interest_rate}%</span>
                    </div>
                    <div class="info-item">
                        <span>Annual Fee</span>
                        <span>₹${account.annual_fee}</span>
                    </div>
                </div>
            </div>
        `).join('');

        container.innerHTML = html || '<div style="text-align: center; color: var(--text-secondary); padding: 2rem;">No bank accounts found</div>';
    }

    renderReconciliation() {
        this.renderExpensesList();
        this.renderCreditTransactionsList();
    }

    renderExpensesList() {
        const container = document.getElementById('expenses-list');
        if (!container) return;

        const expenses = this.getCurrentProfileData('expenses').filter(exp => 
            exp['Payment Mode'] === 'Credit Card'
        );

        const html = expenses.map(expense => {
            const isReconciled = this.data.credit_card_transactions.some(tx => 
                tx.expense_id === expense.id && tx.is_reconciled
            );
            
            return `
                <div class="transaction-item ${isReconciled ? 'reconciled' : ''}" 
                     data-id="${expense.id}" data-type="expense">
                    <div class="transaction-icon">💸</div>
                    <div class="transaction-details">
                        <div class="transaction-title">${expense.Category}</div>
                        <div class="transaction-meta">${expense.Description} • ${new Date(expense.Date).toLocaleDateString()}</div>
                    </div>
                    <div class="transaction-amount">₹${expense.Amount.toLocaleString()}</div>
                    ${isReconciled ? '<div class="reconciled-badge">✅</div>' : ''}
                </div>
            `;
        }).join('');

        container.innerHTML = html || '<div style="text-align: center; color: var(--text-secondary); padding: 1rem;">No credit card expenses found</div>';
    }

    renderCreditTransactionsList() {
        const container = document.getElementById('credit-transactions-list');
        if (!container) return;

        const transactions = this.data.credit_card_transactions.filter(tx => 
            tx.profile_id === this.data.current_profile
        );

        const html = transactions.map(transaction => `
            <div class="transaction-item ${transaction.is_reconciled ? 'reconciled' : ''}" 
                 data-id="${transaction.id}" data-type="credit">
                <div class="transaction-icon">${transaction.transaction_type === 'debit' ? '💳' : '💰'}</div>
                <div class="transaction-details">
                    <div class="transaction-title">${transaction.description}</div>
                    <div class="transaction-meta">${transaction.merchant} • ${new Date(transaction.transaction_date).toLocaleDateString()}</div>
                </div>
                <div class="transaction-amount ${transaction.transaction_type === 'debit' ? 'expense' : 'income'}">
                    ${transaction.transaction_type === 'debit' ? '-' : '+'}₹${transaction.amount.toLocaleString()}
                </div>
                ${transaction.is_reconciled ? '<div class="reconciled-badge">✅</div>' : ''}
            </div>
        `).join('');

        container.innerHTML = html || '<div style="text-align: center; color: var(--text-secondary); padding: 1rem;">No credit card transactions found</div>';
    }

    getCreditCardColor(bankName) {
        const colors = {
            'HDFC': '#004c8f',
            'ICICI': '#f37021', 
            'SBI': '#22409a',
            'Axis': '#800020',
            'Kotak': '#ed232a'
        };
        return colors[bankName] || '#667eea';
    }

    // Modal Management
    showIncomeModal(editId = null) {
        this.currentEditId = editId;
        this.currentEditType = 'income';
        
        const title = editId ? 'Edit Income' : 'Add Income';
        const data = editId ? 
            this.data.income.find(item => item.id === editId) : {
                Date: new Date().toISOString().split('T')[0],
                Year: new Date().getFullYear(),
                Month: new Date().toLocaleString('default', { month: 'long' }),
                'Source Name': '',
                'Income Type': '',
                'Mode of Receipt': '',
                Amount: ''
            };

        const modalBody = `
            <div class="form-group">
                <label class="form-label">Date</label>
                <input type="date" class="form-input" id="income-date" value="${data.Date}">
            </div>
            <div class="form-group">
                <label class="form-label">Source Name</label>
                <select class="form-select" id="income-source">
                    <option value="">Select Source</option>
                    ${this.renderDropdownOptions('income_sources', data['Source Name'])}
                </select>
            </div>
            <div class="form-group">
                <label class="form-label">Income Type</label>
                <select class="form-select" id="income-type">
                    <option value="">Select Type</option>
                    ${this.renderDropdownOptions('income_types', data['Income Type'])}
                </select>
            </div>
            <div class="form-group">
                <label class="form-label">Mode of Receipt</label>
                <select class="form-select" id="income-mode">
                    <option value="">Select Mode</option>
                    ${this.renderDropdownOptions('income_payment_modes', data['Mode of Receipt'])}
                </select>
            </div>
            <div class="form-group">
                <label class="form-label">Amount (₹)</label>
                <input type="number" class="form-input" id="income-amount" value="${data.Amount}" placeholder="0">
            </div>
        `;

        this.showModal(title, modalBody);
    }

    showExpenseModal(editId = null) {
        this.currentEditId = editId;
        this.currentEditType = 'expense';
        
        const title = editId ? 'Edit Expense' : 'Add Expense';
        const data = editId ? 
            this.data.expenses.find(item => item.id === editId) : {
                Date: new Date().toISOString().split('T')[0],
                Year: new Date().getFullYear(),
                Month: new Date().toLocaleString('default', { month: 'long' }),
                Category: '',
                Description: '',
                'Payment Mode': '',
                Amount: ''
            };

        const modalBody = `
            <div class="form-group">
                <label class="form-label">Date</label>
                <input type="date" class="form-input" id="expense-date" value="${data.Date}">
            </div>
            <div class="form-group">
                <label class="form-label">Category</label>
                <select class="form-select" id="expense-category">
                    <option value="">Select Category</option>
                    ${this.renderDropdownOptions('expense_categories', data.Category)}
                </select>
            </div>
            <div class="form-group">
                <label class="form-label">Description</label>
                <input type="text" class="form-input" id="expense-description" value="${data.Description}" placeholder="Enter description">
            </div>
            <div class="form-group">
                <label class="form-label">Payment Mode</label>
                <select class="form-select" id="expense-mode">
                    <option value="">Select Mode</option>
                    ${this.renderDropdownOptions('expense_payment_modes', data['Payment Mode'])}
                </select>
            </div>
            <div class="form-group">
                <label class="form-label">Amount (₹)</label>
                <input type="number" class="form-input" id="expense-amount" value="${data.Amount}" placeholder="0">
            </div>
        `;

        this.showModal(title, modalBody);
    }

    showLoanModal(editId = null) {
        this.currentEditId = editId;
        this.currentEditType = 'loan';
        
        const title = editId ? 'Edit Loan' : 'Add Loan';
        const data = editId ? 
            this.data.loans.find(item => item.id === editId) : {
                'Loan Name': '',
                Principal: '',
                'Interest Rate (%)': '',
                'Tenure (Months)': '',
                'Start Date': new Date().toISOString().split('T')[0],
                'Cutoff Day': ''
            };

        const modalBody = `
            <div class="form-group">
                <label class="form-label">Loan Type</label>
                <select class="form-select" id="loan-name">
                    <option value="">Select Type</option>
                    ${this.renderDropdownOptions('loan_types', data['Loan Name'])}
                </select>
            </div>
            <div class="form-group">
                <label class="form-label">Principal Amount (₹)</label>
                <input type="number" class="form-input" id="loan-principal" value="${data.Principal}" placeholder="0">
            </div>
            <div class="form-group">
                <label class="form-label">Interest Rate (%)</label>
                <input type="number" step="0.01" class="form-input" id="loan-rate" value="${data['Interest Rate (%)']}" placeholder="0.00">
            </div>
            <div class="form-group">
                <label class="form-label">Tenure (Months)</label>
                <input type="number" class="form-input" id="loan-tenure" value="${data['Tenure (Months)']}" placeholder="0">
            </div>
            <div class="form-group">
                <label class="form-label">Start Date</label>
                <input type="date" class="form-input" id="loan-start" value="${data['Start Date']}">
            </div>
            <div class="form-group">
                <label class="form-label">Cutoff Day</label>
                <input type="number" min="1" max="31" class="form-input" id="loan-cutoff" value="${data['Cutoff Day']}" placeholder="1-31">
            </div>
        `;

        this.showModal(title, modalBody);
    }

    renderDropdownOptions(category, selectedValue = '') {
        if (!this.data.dropdowns[category]) return '';
        
        return this.data.dropdowns[category].map(option => 
            `<option value="${option}" ${option === selectedValue ? 'selected' : ''}>${option}</option>`
        ).join('');
    }

    showModal(title, body) {
        document.getElementById('modal-title').textContent = title;
        document.getElementById('modal-body').innerHTML = body;
        document.getElementById('modal-overlay').classList.add('active');
    }

    hideModal() {
        document.getElementById('modal-overlay').classList.remove('active');
        this.currentEditId = null;
        this.currentEditType = null;
    }

    saveModalData() {
        if (this.currentEditType === 'income') {
            this.saveIncomeData();
        } else if (this.currentEditType === 'expense') {
            this.saveExpenseData();
        } else if (this.currentEditType === 'loan') {
            this.saveLoanData();
        }
    }

    saveIncomeData() {
        const date = document.getElementById('income-date').value;
        const dateObj = new Date(date);
        
        const incomeData = {
            id: this.currentEditId || `income_${Date.now()}`,
            Date: date,
            Year: dateObj.getFullYear(),
            Month: dateObj.toLocaleString('default', { month: 'long' }),
            'Source Name': document.getElementById('income-source').value,
            'Income Type': document.getElementById('income-type').value,
            'Mode of Receipt': document.getElementById('income-mode').value,
            Amount: parseFloat(document.getElementById('income-amount').value) || 0,
            profile_id: this.data.current_profile,
            account_id: 'savings_sbi_primary'
        };

        if (this.currentEditId) {
            const index = this.data.income.findIndex(item => item.id === this.currentEditId);
            this.data.income[index] = incomeData;
            this.showToast('Income updated successfully!', 'success');
        } else {
            this.data.income.push(incomeData);
            this.showToast('Income added successfully!', 'success');
        }

        this.saveData();
        this.updateAllViews();
        this.hideModal();
    }

    saveExpenseData() {
        const date = document.getElementById('expense-date').value;
        const dateObj = new Date(date);
        const paymentMode = document.getElementById('expense-mode').value;
        
        // Determine account based on payment mode
        let accountId = 'savings_sbi_primary';
        if (paymentMode === 'Credit Card') {
            const creditCard = this.data.accounts.find(acc => 
                acc.account_type === 'Credit Card' && acc.profile_id === this.data.current_profile
            );
            if (creditCard) accountId = creditCard.id;
        }
        
        const expenseData = {
            id: this.currentEditId || `expense_${Date.now()}`,
            Date: date,
            Year: dateObj.getFullYear(),
            Month: dateObj.toLocaleString('default', { month: 'long' }),
            Category: document.getElementById('expense-category').value,
            Description: document.getElementById('expense-description').value,
            'Payment Mode': paymentMode,
            Amount: parseFloat(document.getElementById('expense-amount').value) || 0,
            profile_id: this.data.current_profile,
            account_id: accountId
        };

        if (this.currentEditId) {
            const index = this.data.expenses.findIndex(item => item.id === this.currentEditId);
            this.data.expenses[index] = expenseData;
            this.showToast('Expense updated successfully!', 'success');
        } else {
            this.data.expenses.push(expenseData);
            this.showToast('Expense added successfully!', 'success');
        }

        this.saveData();
        this.updateAllViews();
        this.hideModal();
    }

    saveLoanData() {
        const principal = parseFloat(document.getElementById('loan-principal').value) || 0;
        const rate = parseFloat(document.getElementById('loan-rate').value) || 0;
        const tenure = parseInt(document.getElementById('loan-tenure').value) || 0;
        
        // Calculate EMI
        const monthlyRate = rate / (12 * 100);
        const emi = monthlyRate > 0 
            ? principal * (monthlyRate * Math.pow(1 + monthlyRate, tenure)) / (Math.pow(1 + monthlyRate, tenure) - 1)
            : principal / tenure;

        const loanData = {
            id: this.currentEditId || `loan_${Date.now()}`,
            'Loan Name': document.getElementById('loan-name').value,
            Principal: principal,
            'Interest Rate (%)': rate,
            'Tenure (Months)': tenure,
            'Start Date': document.getElementById('loan-start').value,
            'Cutoff Day': parseInt(document.getElementById('loan-cutoff').value) || 1,
            EMI: Math.round(emi * 100) / 100,
            profile_id: this.data.current_profile
        };

        if (this.currentEditId) {
            const index = this.data.loans.findIndex(item => item.id === this.currentEditId);
            this.data.loans[index] = loanData;
            this.showToast('Loan updated successfully!', 'success');
        } else {
            this.data.loans.push(loanData);
            this.showToast('Loan added successfully!', 'success');
        }

        this.saveData();
        this.updateAllViews();
        this.hideModal();
    }

    // CRUD Operations
    editIncome(id) {
        this.showIncomeModal(id);
    }

    editExpense(id) {
        this.showExpenseModal(id);
    }

    editLoan(id) {
        this.showLoanModal(id);
    }

    deleteIncome(id) {
        const item = this.data.income.find(income => income.id === id);
        this.showConfirmModal(
            `Are you sure you want to delete this income entry of ₹${item.Amount.toLocaleString()}?`,
            () => {
                this.data.income = this.data.income.filter(income => income.id !== id);
                this.saveData();
                this.updateAllViews();
                this.showToast('Income deleted successfully!', 'success');
            }
        );
    }

    deleteExpense(id) {
        const item = this.data.expenses.find(expense => expense.id === id);
        this.showConfirmModal(
            `Are you sure you want to delete this expense entry of ₹${item.Amount.toLocaleString()}?`,
            () => {
                this.data.expenses = this.data.expenses.filter(expense => expense.id !== id);
                this.saveData();
                this.updateAllViews();
                this.showToast('Expense deleted successfully!', 'success');
            }
        );
    }

    deleteLoan(id) {
        const item = this.data.loans.find(loan => loan.id === id);
        this.showConfirmModal(
            `Are you sure you want to delete the loan "${item['Loan Name']}"?`,
            () => {
                this.data.loans = this.data.loans.filter(loan => loan.id !== id);
                this.saveData();
                this.updateAllViews();
                this.showToast('Loan deleted successfully!', 'success');
            }
        );
    }

    // Master Data Management
    renderMasterPage() {
        const masterGrid = document.getElementById('master-grid');
        if (!masterGrid) return;

        const categories = [
            { key: 'income_types', title: '💰 Income Types', icon: '💰' },
            { key: 'income_sources', title: '👥 Income Sources', icon: '👥' },
            { key: 'expense_categories', title: '🛍️ Expense Categories', icon: '🛍️' },
            { key: 'banks', title: '🏦 Banks', icon: '🏦' }
        ];

        const html = categories.map(category => `
            <div class="master-category">
                <h3>
                    ${category.title}
                    <button class="btn btn-sm btn-primary" onclick="financialTracker.addDropdownValue('${category.key}')">
                        ➕ Add
                    </button>
                </h3>
                <div class="chips-container" id="chips-${category.key}">
                    ${this.renderChips(category.key)}
                </div>
            </div>
        `).join('');

        masterGrid.innerHTML = html;
    }

    renderChips(category) {
        if (!this.data.dropdowns[category]) return '';
        
        return this.data.dropdowns[category].map((value, index) => `
            <div class="chip" onclick="financialTracker.editDropdownValue('${category}', ${index})">
                <span>${value}</span>
                <button class="chip-delete" onclick="event.stopPropagation(); financialTracker.deleteDropdownValue('${category}', ${index})">
                    ✕
                </button>
            </div>
        `).join('');
    }

    addDropdownValue(category) {
        const value = prompt(`Enter new ${category.replace('_', ' ')}:`);
        if (value && value.trim()) {
            const trimmedValue = value.trim();
            if (!this.data.dropdowns[category].includes(trimmedValue)) {
                this.data.dropdowns[category].push(trimmedValue);
                this.data.dropdowns[category].sort();
                this.saveData();
                this.renderMasterPage();
                this.showToast(`"${trimmedValue}" added successfully!`, 'success');
            } else {
                this.showToast('Value already exists!', 'warning');
            }
        }
    }

    editDropdownValue(category, index) {
        const currentValue = this.data.dropdowns[category][index];
        const newValue = prompt(`Edit ${category.replace('_', ' ')}:`, currentValue);
        if (newValue && newValue.trim() && newValue.trim() !== currentValue) {
            const trimmedValue = newValue.trim();
            if (!this.data.dropdowns[category].includes(trimmedValue)) {
                this.data.dropdowns[category][index] = trimmedValue;
                this.data.dropdowns[category].sort();
                this.saveData();
                this.renderMasterPage();
                this.showToast(`"${currentValue}" updated to "${trimmedValue}"!`, 'success');
            } else {
                this.showToast('Value already exists!', 'warning');
            }
        }
    }

    deleteDropdownValue(category, index) {
        const value = this.data.dropdowns[category][index];
        this.showConfirmModal(
            `Are you sure you want to delete "${value}"?`,
            () => {
                this.data.dropdowns[category].splice(index, 1);
                this.saveData();
                this.renderMasterPage();
                this.showToast(`"${value}" deleted successfully!`, 'success');
            }
        );
    }

    // Confirmation Modal
    showConfirmModal(message, callback) {
        document.getElementById('confirm-message').textContent = message;
        document.getElementById('confirm-modal').classList.add('active');
        this.confirmCallback = callback;
    }

    hideConfirmModal() {
        document.getElementById('confirm-modal').classList.remove('active');
        this.confirmCallback = null;
    }

    executeConfirmAction() {
        if (this.confirmCallback) {
            this.confirmCallback();
        }
        this.hideConfirmModal();
    }

    // Toast Notifications
    showToast(message, type = 'success') {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        const icons = {
            success: '✅',
            error: '❌',
            warning: '⚠️',
            info: 'ℹ️'
        };
        
        toast.innerHTML = `
            <span class="toast-icon">${icons[type] || icons.info}</span>
            <span class="toast-message">${message}</span>
        `;
        
        const container = document.getElementById('toast-container');
        container.appendChild(toast);
        
        setTimeout(() => toast.classList.add('show'), 100);
        
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                if (container.contains(toast)) {
                    container.removeChild(toast);
                }
            }, 300);
        }, 3000);
    }

    // Update all views
    updateAllViews() {
        this.updateDashboard();
        this.renderIncomeTable();
        this.renderExpenseTable();
        this.renderLoansGrid();
        this.renderAccountsSummary();
        this.renderCreditCards();
        this.renderBankAccounts();
        this.renderReconciliation();
        this.updateChart();
        this.renderProfileSelector();
    }
}

// Initialize the application
let financialTracker;

document.addEventListener('DOMContentLoaded', () => {
    financialTracker = new FinancialTracker();
});

// Add some CSS classes for styling
const style = document.createElement('style');
style.textContent = `
    .badge {
        display: inline-block;
        padding: 0.25rem 0.5rem;
        font-size: 0.75rem;
        font-weight: 500;
        border-radius: 0.375rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }

    .badge-success {
        background-color: var(--success-100);
        color: var(--success-700);
    }

    .badge-danger {
        background-color: var(--danger-100);
        color: var(--danger-700);
    }

    .account-badge {
        font-size: 0.75rem;
        padding: 0.125rem 0.375rem;
        background-color: var(--bg-tertiary);
        border-radius: 0.25rem;
        color: var(--text-secondary);
    }

    .loan-card {
        background: var(--bg-secondary);
        border: 1px solid var(--border-color);
        border-radius: var(--radius-xl);
        padding: var(--space-6);
        box-shadow: var(--shadow);
        transition: all var(--transition);
    }

    .loan-card:hover {
        transform: translateY(-4px);
        box-shadow: var(--shadow-xl);
    }

    .loan-details {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: var(--space-4);
        margin: var(--space-6) 0;
    }

    .loan-detail {
        display: flex;
        flex-direction: column;
        gap: var(--space-1);
    }

    .loan-detail .label {
        font-size: var(--font-size-xs);
        color: var(--text-tertiary);
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }

    .loan-detail .value {
        font-weight: var(--font-weight-semibold);
        color: var(--text-primary);
    }

    .loan-progress {
        margin-top: var(--space-6);
    }

    .progress-label {
        display: flex;
        justify-content: space-between;
        margin-bottom: var(--space-2);
        font-size: var(--font-size-sm);
        font-weight: var(--font-weight-medium);
    }

    .progress-bar {
        height: 8px;
        background: var(--bg-tertiary);
        border-radius: 4px;
        overflow: hidden;
    }

    .progress-fill {
        height: 100%;
        background: var(--gradient-primary);
        border-radius: 4px;
        transition: width var(--transition);
    }

    .progress-text {
        font-size: var(--font-size-xs);
        color: var(--text-secondary);
        margin-top: var(--space-2);
    }

    .master-category {
        background: var(--bg-secondary);
        border: 1px solid var(--border-color);
        border-radius: var(--radius-xl);
        padding: var(--space-6);
        margin-bottom: var(--space-6);
    }

    .master-category h3 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: var(--space-4);
        font-size: var(--font-size-lg);
        font-weight: var(--font-weight-semibold);
    }

    .chips-container {
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-2);
    }

    .chip {
        display: flex;
        align-items: center;
        gap: var(--space-2);
        padding: var(--space-2) var(--space-3);
        background: var(--bg-tertiary);
        border: 1px solid var(--border-color);
        border-radius: var(--radius-full);
        font-size: var(--font-size-sm);
        cursor: pointer;
        transition: all var(--transition);
    }

    .chip:hover {
        background: var(--bg-primary);
        transform: translateY(-1px);
    }

    .chip-delete {
        background: none;
        border: none;
        color: var(--text-secondary);
        cursor: pointer;
        padding: 2px;
        border-radius: 50%;
        width: 18px;
        height: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        transition: all var(--transition);
    }

    .chip-delete:hover {
        background: var(--danger-500);
        color: white;
    }

    .transaction-item {
        display: flex;
        align-items: center;
        gap: var(--space-3);
        padding: var(--space-3);
        border-radius: var(--radius);
        margin-bottom: var(--space-2);
        transition: all var(--transition);
        cursor: pointer;
        position: relative;
    }

    .transaction-item:hover {
        background: var(--bg-tertiary);
    }

    .transaction-item.reconciled {
        background: var(--success-50);
        border: 1px solid var(--success-200);
    }

    .transaction-details {
        flex: 1;
    }

    .transaction-title {
        font-weight: var(--font-weight-medium);
        margin-bottom: var(--space-1);
    }

    .transaction-meta {
        font-size: var(--font-size-sm);
        color: var(--text-secondary);
    }

    .transaction-amount {
        font-weight: var(--font-weight-semibold);
        font-size: var(--font-size-lg);
    }

    .transaction-amount.expense {
        color: var(--danger-500);
    }

    .transaction-amount.income {
        color: var(--success-500);
    }

    .reconciled-badge {
        position: absolute;
        top: var(--space-1);
        right: var(--space-1);
        font-size: var(--font-size-sm);
    }

    .utilization-bar {
        height: 6px;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 3px;
        overflow: hidden;
        margin-bottom: var(--space-2);
    }

    .utilization-fill {
        height: 100%;
        background: rgba(255, 255, 255, 0.8);
        border-radius: 3px;
        transition: width var(--transition);
    }

    .utilization-label {
        display: flex;
        justify-content: space-between;
        font-size: var(--font-size-xs);
        opacity: 0.9;
        margin-bottom: var(--space-1);
    }

    .loans-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: var(--space-6);
    }

    @media (max-width: 768px) {
        .loans-grid {
            grid-template-columns: 1fr;
        }
        
        .loan-details {
            grid-template-columns: 1fr;
        }
    }
`;
document.head.appendChild(style);