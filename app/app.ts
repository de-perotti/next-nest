import next from 'next';

export const nextApp = next({ dev: process.env.NODE_ENV !== 'production' });
