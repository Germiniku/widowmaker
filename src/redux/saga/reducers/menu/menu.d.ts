interface IMenu {
  breadcrumb: {
    [key: string]: {
      icon: React.ReactNode;
      name: string;
    };
  };
  topMenu: Array<IMenuItem>;
  sideMenu: {
    [key: string]: ISidebar;
  };
  currentTopMenu: string | null;
  currentSidebar: ISidebar;
  theme: theme;
  primaryColor: string;
  drawer: boolean;
  contextMenus: IContextMenu[]; // 多页签状态
}

// 多页签
type IContextMenu = {
  name: string;
  path: string;  
}

type theme = 'light' | 'dark' | undefined;

type IMenuItem = {
  name: string;
  path: string;
  icon?: React.ReactNode;
};

type ISidebar = ISidebarItem[];

type ISidebarItem = {
  name: string;
  path: string;
  icon: React.ReactNode;
  routes?: IMenuItem[];
};
