import React, { Component } from "react";
import css from './searchbar.module.css'

class Searchbar extends Component{
    state = {
        searchQuery: '',
    };

    handleSearchQueryChange = event => {
        this.setState({ searchQuery: event.currentTarget.value.toLowerCase() });
    } 

    handleSubmit = event => {
        event.preventDefault();

        this.props.onSubmit();
        this.setState({ searchQuery: '' });
    }

    render() {
        return (
            <header className={css.searchbar}>
                <form onSubmit={this.handleSubmit} className={css.searchForm}>
                    <button type="submit" className={css.searchForm__button}>
                        <span className={css.searchForm__buttonLabel}>Search</span>
                    </button>

                    <input
                        className={css.searchForm__input}
                        type="text"
                        autocomplete="off"
                        autofocus
                        placeholder="Search images and photos"
                        value={this.state.searchQuery}
                        onChange={this.handleSearchQueryChange}
                        />
                </form>
            </header>
        )
    }
};

export default Searchbar;

