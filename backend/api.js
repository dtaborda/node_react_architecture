const api = {};

let service;

api.setService = (_service) => {
  console.log('Setting services in API');
  service = _service;
};

api.getRouter = (expressRouter) => {
  const router = expressRouter();

  const bodyHasRequiredProperties = (body, properties) => {
    for (const i in properties) {
      const prop = properties[i];
      if (!body.hasOwnProperty(prop)) {
        return false;
      } else {
        if (body[prop] !== 0 && !body[prop]) {
          return false;
        }
      }
    }
    return true;
  };

  router.use((req, res, next) => {
    console.log(req.method + ': ' + req.url);
    next();
  });

  router.get('/employees', (req, res) => {
    service.getEmployees().then((response) => {
      res.json(response);
    }, (reason) => {
      res.json({ error: reason });
    });
  });

  router.get('/employees/:id', (req, res) => {
    service.getEmployee(req.params.id).then((response) => {
      res.json(response);
    }, (reason) => {
      res.json({ error: reason });
    });
  });

  router.delete('/employees/:id', (req, res) => {
    service.deleteEmployee(req.params.id).then((response) => {
      res.json(response);
    }, (reason) => {
      res.json({ error: reason });
    });
  });

  router.post('/employees', (req, res) => {
    const requiredProperties = ['firstName', 'lastName', 'initials', 'officeId'];
    if (!bodyHasRequiredProperties(req.body, requiredProperties)) {
      res.statusCode = 400;
      return res.json('Invalid request body');
    }

    service.saveEmployee(req.body).then((employee) => {
      res.json(employee);
    }, (reason) => {
      res.statusCode = '400';
      res.json({ error: reason });
    });
  });

  router.put('/employees/:id', (req, res) => {
    const id = req.params.id;
    const requiredProperties = ['firstName', 'lastName', 'initials', 'officeId'];
    if (!bodyHasRequiredProperties(req.body, requiredProperties)) {
      res.statusCode = 400;
      return res.json('Invalid request body');
    }

    service.updateEmployee(id, req.body).then((employee) => {
      res.json(employee);
    }, (reason) => {
      res.statusCode = 404;
      res.json('Not found.');
    });
  });

  router.get('/offices', (req, res) => {
    service.getOffices().then((response) => {
      res.json(response);
    }, (reason) => {
      res.json({ error: reason });
    });
  });

  const routes = [];
  for (const index in router.stack) {
    const layer = router.stack[index];
    if (layer.route) {
      const getMethod = (methods) => {
        if (methods.put) {
          return 'PUT';
        }
        if (methods.get) {
          return 'GET';
        }
        if (methods.post) {
          return 'POST';
        }
        if (methods.delete) {
          return 'DELETE';
        }
      };
      routes.push({ method: getMethod(layer.route.methods), url: layer.route.path });
    }
  }
  return router;
};

module.exports = api;
