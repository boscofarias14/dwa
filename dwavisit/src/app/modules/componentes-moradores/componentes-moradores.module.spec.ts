import { ComponentesMoradoresModule } from './componentes-moradores.module';

describe('ComponentesMoradoresModule', () => {
  let componentesMoradoresModule: ComponentesMoradoresModule;

  beforeEach(() => {
    componentesMoradoresModule = new ComponentesMoradoresModule();
  });

  it('should create an instance', () => {
    expect(componentesMoradoresModule).toBeTruthy();
  });
});
