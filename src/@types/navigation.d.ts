export type ProductNavigationProps = {
  id?: string;
}

export type OrderNavigationProps = {
  id: string;
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      signIn: undefined;
      forgotPassword: undefined;
      home: undefined;
      product: ProductNavigationProps;
      order: OrderNavigationProps;
      orders: undefined;
    }
  }
}