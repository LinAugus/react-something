
export class ReactClassComponent {
  constructor(props, context) {
    this.props = props;
    this.context = context;
    this.refs = {};
    this.state = this.state || {};
    // this.updater = updater; 
  }
}