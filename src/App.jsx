import React, { useState, useEffect, useRef } from 'react';

const STORAGE_KEYS = {
  START_DATE: 'hp_start_date',
  LOGS: 'hp_logs_v1',
  LAST_MORNING: 'hp_last_morning_ts',
  ACTIVE_TIMER: 'hp_active_timer_v1',
};

const createInitialLogs = () => {
  const logs = {};
  for (let i = 1; i <= 14; i++) {
    logs[i] = {
      morning: false,
      morningTime: null,
      evening: false,
      eveningTime: null,
    };
  }
  return logs;
};

export default function App() {
  const [startDate, setStartDate] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEYS.START_DATE) || new Date().toISOString().split('T')[0];
    } catch {
      return new Date().toISOString().split('T')[0];
    }
  });

  const [logs, setLogs] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.LOGS);
      return saved ? JSON.parse(saved) : createInitialLogs();
    } catch {
      return createInitialLogs();
    }
  });

  const [lastMorningTs, setLastMorningTs] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.LAST_MORNING);
      return saved ? parseInt(saved, 10) || 0 : 0;
    } catch {
      return 0;
    }
  });

  const [activeTimer, setActiveTimer] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.ACTIVE_TIMER);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // 后续业务逻辑与 UI 代码保持不变...
