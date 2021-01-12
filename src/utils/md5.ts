import crypto from 'crypto';

function MD5(str: string): string {
  return crypto.createHash('md5').update(str).digest('hex');
}

export default MD5;
