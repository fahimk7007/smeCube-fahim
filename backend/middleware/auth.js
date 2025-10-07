const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
</xArtifact>

#### 5. backend/middleware/errorHandler.js
<xaiArtifact artifact_id="d75dc367-859c-4d35-a190-4e0d74503eec" artifact_version_id="c739868b-fd73-415d-9e0c-f6459d824b0c" title="errorHandler.js" contentType="application/javascript">
module.exports = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ msg: 'Server error' });
};