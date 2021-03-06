import React from 'react';

export default loadComponent =>
    class AsyncComponent extends React.Component {
        state = {
            Component: null
        };
        async componentDidMount() {
            if (this.state.Component !== null) return;

            try {
                const { default: Component } = await loadComponent();
                this.setState({ Component });
            } catch (err) {
                console.error(`Can't load component in <AsyncComponent />`);
                throw err;
            }
        }

        render() {
            const { Component } = this.state;
            return Component ? <Component {...this.props} /> : null;
        }
    };
