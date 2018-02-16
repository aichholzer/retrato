module.exports = (router, controller) => {
  router.get('/', controller.index);
  router.get('/:id', controller.read);

  return router;
};
