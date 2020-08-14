/** Like Button Class */
'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}
/** End: Like Button Class */

/** Set Title */
document.title = "Latihan React";

/** Bootstrap App */
const rootApp = document.createElement('div');
rootApp.setAttribute('id', 'rootApp');

// console.log(document.body.appendChild(rootApp));
document.body.appendChild(rootApp);

ReactDOM.render(e(LikeButton), rootApp)