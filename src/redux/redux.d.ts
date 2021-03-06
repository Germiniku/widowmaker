interface ActionParams<T = any> {
  type: string;
  payload: Object<T>;
}

interface IState {
  common: any;
  user: User;
  menu: IMenu;
}
