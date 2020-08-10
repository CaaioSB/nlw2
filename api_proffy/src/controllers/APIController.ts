import { Request, Response } from 'express';

export default class APIController {
  index(request: Request, response: Response) {
    return response.json({
      name: 'API NLS #02 - Proffy',
      version: '1.0',
      webRepository: 'https://github.com/CaaioSB/react-nlw2-proffy',
      apiRepository: '',
      mobileRepository: '',
    });
  }
}
