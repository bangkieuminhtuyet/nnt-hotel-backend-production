const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers?.token;
    if (token) {
      const accessToken = token.split(' ')[1];
      const decodedData = jwt.verify(accessToken, process.env.JWT_ACCESS_KEY);
      req.user = decodedData.data;
      next();
    }
  } catch (e) {
    console.log(e);
    return res.status(403).json({
      errCode: 1,
      message: 'Bạn không có quyền truy cập !',
    });
  }
};

const verifyTokenAndFullAccess = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.role === 'developer') {
      next();
    } else {
      return res.status(403).json({
        errCode: -1,
        message: 'Bạn không có quyền truy cập !',
      });
    }
  });
};

const verifyTokenAndOwnerAcess = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.role === 'owner' || req.user.role === 'developer') {
      next();
    } else {
      return res.status(403).json({
        errCode: -1,
        message: 'Bạn không có quyền truy cập !',
      });
    }
  });
};

const verifyTokenAndManagerAcess = (req, res, next) => {
  verifyToken(req, res, () => {
    if (
      req.user.role === 'owner' ||
      req.user.role === 'developer' ||
      req.user.role === 'manager'
    ) {
      next();
    } else {
      return res.status(403).json({
        errCode: -1,
        message: 'Bạn không có quyền truy cập !',
      });
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenAndFullAccess,
  verifyTokenAndOwnerAcess,
  verifyTokenAndManagerAcess,
};
