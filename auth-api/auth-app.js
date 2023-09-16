const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/verify-token/:token', (req, res) => {
  const token = req.params.token;

 
  if (token === 'abc') {
    return res.status(200).json({ message: 'Valid token.', uid: 'u1' });
  }
  res.status(401).json({ message: 'Token invalid.' });
});

app.get('/token/:hashedPassword/:enteredPassword', (req, res) => {
  const hashedPassword = req.params.hashedPassword;
  const enteredPassword = req.params.enteredPassword;

  if (hashedPassword === enteredPassword + '_hash') {
    const token = 'abc';
    return res.status(200).json({ message: 'Token created.', token: token });
  }
  res.status(401).json({ message: 'Passwords do not match.' });
});

app.get('/hashed-password/:password', (req, res) => {
 
  const enteredPassword = req.params.password;
  const hashedPassword = enteredPassword + '_hash';
  res.status(200).json({ hashedPassword: hashedPassword });
});

app.listen(80);
