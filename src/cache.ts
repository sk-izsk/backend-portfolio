import expeditious from 'express-expeditious';

const cacheOptions: expeditious.ExpeditiousOptions = {
  namespace: 'nodeCache',
  defaultTtl: '60 minutes',
};

const cache = expeditious(cacheOptions);

export { cache };
