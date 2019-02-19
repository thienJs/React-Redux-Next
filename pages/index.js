import React from 'react';
import Page from '../components/page';
import Layout from '../components/Layout';
import { connect } from 'react-redux';

import { addPost } from '../store/actions/posts';
import List from '../components/List';
import css from '../css/style.scss';

class Default extends Page {
  state = {
    title: '',
    description: ''
  };

  onAddPostHandler = () => {
    const { title, description } = this.state;
    this.props.addPost({ title, description });
  };

  onChangeHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { title, description } = this.state;
    console.log(this.props);
    return (
      <Layout>
        <div className={css.container}>
          <div className={css.input__group}>
            <input
              name="title"
              value={title}
              placeholder="Title"
              onChange={this.onChangeHandler}
            />
            <input
              name="description"
              value={description}
              placeholder="Description"
              onChange={this.onChangeHandler}
            />
            <button onClick={this.onAddPostHandler}>Add Post</button>
          </div>
          <h1 className={css.h2}>Posts</h1>
          <ul>
            <List lists={this.props.posts} />
          </ul>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = ({ posts }) => posts;

export default connect(
  mapStateToProps,
  { addPost }
)(Default);
