import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Transaction } from '../types';
import { getFinancialAdvice } from '../services/geminiService';

const MOCK_TRANSACTIONS: Transaction[] = [
  { id: '1', userId: '123', amount: 50, type: 'expense', category: 'Food', note: 'Lunch', date: new Date() },
  { id: '2', userId: '123', amount: 120, type: 'expense', category: 'Shopping', note: 'New shoes', date: new Date() },
  { id: '3', userId: '123', amount: 15, type: 'expense', category: 'Transport', note: 'Bus fare', date: new Date() },
  { id: '4', userId: '123', amount: 1000, type: 'income', category: 'Salary', note: 'Monthly pay', date: new Date() },
];

const DashboardScreen: React.FC = () => {
  const { profile, user } = useAuth();
  const [transactions, setTransactions] = useState<Transaction[]>(MOCK_TRANSACTIONS);
  const [aiTip, setAiTip] = useState<string>("Analyzing your hive's honey...");

  useEffect(() => {
    if (!user) return;
    
    // In a frontend-only app, we just use the mock data
    setTransactions(MOCK_TRANSACTIONS);
    
    // Update AI Advice based on mock transactions
    if (MOCK_TRANSACTIONS.length > 0 && profile) {
      getFinancialAdvice(MOCK_TRANSACTIONS, profile.budgetLimit).then(setAiTip);
    }
  }, [user, profile]);

  const totalSpent = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="space-y-6">
      <div className="bg-cybee-black text-white p-6 rounded-3xl shadow-xl">
        <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">Total Spent This Month</p>
        <h2 className="text-4xl font-extrabold mt-2">${totalSpent.toLocaleString()}</h2>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm">Budget: ${profile?.budgetLimit}</span>
          <div className="w-2/3 bg-gray-700 h-2 rounded-full overflow-hidden">
            <div 
              className="bg-cybee-yellow h-full transition-all duration-500" 
              style={{ width: `${Math.min((totalSpent / (profile?.budgetLimit || 1)) * 100, 100)}%` }}
            />
          </div>
        </div>
      </div>

      <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-start space-x-4">
        <div className="bg-cybee-yellow/20 p-3 rounded-full">🐝</div>
        <div>
          <h3 className="font-bold text-cybee-black">Cybee's Tip</h3>
          <p className="text-sm text-gray-600 mt-1 italic">"{aiTip}"</p>
        </div>
      </div>

      <section>
        <h3 className="text-xl font-bold mb-4">Recent Activity (Local Mock)</h3>
        <div className="space-y-3">
          {transactions.map(t => (
            <div key={t.id} className="bg-white p-4 rounded-xl flex items-center justify-between shadow-sm border border-gray-50">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">🛍️</div>
                <div>
                  <p className="font-bold text-sm">{t.category}</p>
                  <p className="text-xs text-gray-400">{t.note}</p>
                </div>
              </div>
              <p className={`font-bold ${t.type === 'expense' ? 'text-cybee-red' : 'text-cybee-green'}`}>
                {t.type === 'expense' ? '-' : '+'}${t.amount}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DashboardScreen;