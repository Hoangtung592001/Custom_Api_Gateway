const express =  require('express');
const routes =  require('./routes');
const helmet = require('helmet');
const app = express();
const PORT = 3000;
const registstry = require('./routes/registry.json');

app.use(express.json());

app.use(helmet());

const auth = (req, res, next) => {
    const user = registry.auth.users[username];
    if (user) {
        if (user.username === username & user.password === password) {
            next();
        }
        else {
            res.send({})
        }
    }
    else {
        res.send({})
    }
}

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Gateway has started on PORT ${PORT}`);
})