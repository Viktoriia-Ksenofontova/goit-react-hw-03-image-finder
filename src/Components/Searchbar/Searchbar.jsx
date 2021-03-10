import { Component } from 'react';

import styles from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    searchText: '',
  };

  handleChange = e => {
    this.setState({ searchText: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchText);
  };

  render() {
    const { searchText } = this.state;

    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchText}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
