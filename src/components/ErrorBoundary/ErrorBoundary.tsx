import { Component, ReactNode } from 'react';
import { Translation } from 'react-i18next';
import './ErrorBoundary.scss';

type Props = {
  children: ReactNode;
};

type State = {
  error: boolean;
};

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      error: false,
    };
  }

  componentDidCatch(): void {
    this.setState({ error: true });
  }

  render() {
    if (this.state.error) {
      return (
        <div className="error-boundary">
          <Translation>
            {(t) => (
              <h2 className="error-boundary__title">
                {t('errorBoundary')} <br />
                {t('checkConsole')}
              </h2>
            )}
          </Translation>
        </div>
      );
    }

    return <>{this.props.children}</>;
  }
}

export default ErrorBoundary;
