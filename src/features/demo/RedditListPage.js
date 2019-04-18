import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class RedditListPage extends Component {
  static propTypes = {
    demo: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  componentDidMount () {
    var OneSignal = window.OneSignal || []
    OneSignal.push(async () => {
      OneSignal.init({
        appId: '3ef6f647-5b14-44b8-aa19-940fe45a5ce8',
        safari_web_id: 'web.onesignal.auto.6974e7ad-baef-42fd-b71d-7f7df083312f',
        autoResubscribe: true,
        autoRegister: false,
        promptOptions: {
          /* These prompt options values configure both the HTTP prompt and the HTTP popup. */
          /* actionMessage limited to 90 characters */
          actionMessage:
            'Chúng tôi muốn thông báo cho bạn những tin tức mới nhất, hoạt động của những người bạn quan tâm',
          /* acceptButtonText limited to 15 characters */
          acceptButtonText: 'Cho phép',
          /* cancelButtonText limited to 15 characters */
          cancelButtonText: 'Không, cảm ơn'
        },
        allowLocalhostAsSecureOrigin: true,
        notifyButton: {
          enable: false
        }
      })
      OneSignal.showNativePrompt()
    })

    OneSignal.push(() => {
      // Occurs when the user's subscription changes to a new value.
      OneSignal.on('subscriptionChange', (isSubscribed) => {
        if (isSubscribed) {
          /* These examples are all valid */
          OneSignal.getUserId((userId) => {
            
          })
        }
      })
    })
  }


  render() {

    return (
      <div className="demo-reddit-list-page">
        <button disabled={this.props.demo.fetchRedditListPending} onClick={this.props.actions.fetchRedditList}>
        {this.props.demo.fetchRedditListPending? 'Fetching....': 'Fetch topics'}
        </button>
        <br/>
        <br/>
        <ul>
        {
          this.props.demo.redditList.map(((item, index) => (
            <li key={index}>
              {item.username}-{item.email}
            </li>
          )))
        }

        </ul>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    demo: state.demo,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RedditListPage);
