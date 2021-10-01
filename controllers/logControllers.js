const fs = require('fs');

const logs = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/logs.json`)
);

exports.getTimestamp = (req, res) => {
  res.status(200).json({
      "timestamp": Date.now()
    });
}

exports.getLogs = (req, res) => {
  const { limit } = req.query;

  res.status(200).json({
    "logs": logs.slice(-(+limit))
  })
}

exports.createLog = (req, res) => {
  const { level, message } = req.body;

  const log = {
    "timestamp": Date.now(),
    level,
    message
  };

  logs.push(log);

  fs.writeFile(
    `${__dirname}/../data/logs.json`,
    JSON.stringify(logs),
    err => {
      if (err) {
        res.status(500).json({
          "error_msg": "Internal Server Error"
        })
      } else 
        res.status(200).send('');
    }
  );
}
