import { connect, InferableComponentEnhancer, Dispatch, DispatchProp, Component } from 'react-redux'

export abstract class ReduxViewContainer {
  protected abstract MapStateToProps(initialState: any, ownProps: any): any;
  protected abstract MapDispatchToProps(dispatch: Dispatch<any>, ownProps: any): any;
  protected connect(view: Component<any>): InferableComponentEnhancer<DispatchProp<any>> {
    return connect(this.MapStateToProps, this.MapDispatchToProps);
  }
}
