const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

exports.handleMobileUpload = (req, res, next) => {
  if (!req.file && req.body.photo?.uri) {
    try {
      const { photo } = req.body;
      const uploadDir = path.join(__dirname, '../public/images');
      fs.mkdirSync(uploadDir, { recursive: true });

      const ext = photo.uri.split('.').pop() || 'jpg';
      const filename = `mobile-${uuidv4()}.${ext}`;
      const filepath = path.join(uploadDir, filename);

      if (photo.uri.startsWith('data:')) {
        const base64Data = photo.uri.split(',')[1];
        fs.writeFileSync(filepath, base64Data, 'base64');
      } else {
        fs.copyFileSync(photo.uri.replace('file://', ''), filepath);
      }

      req.file = {
        path: filepath,
        filename,
        mimetype: photo.type || 'image/jpeg'
      };
    } catch (error) {
      console.error('Erreur traitement mobile:', error);
    }
  }
  next();
};