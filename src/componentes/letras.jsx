import React, { Component } from 'react';

class TextoMaquinaEscribir extends Component {
  constructor(props) {
    super(props);
    this.state = {
      texto: '',
      velocidad: this.props.velocidad || 50, // velocidad predeterminada es 50ms
      indice: 0,
    };
  }

  componentDidMount() {
    const { palabras } = this.props;
    this.escribirTexto(palabras[this.state.indice]);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  escribirTexto = (texto) => {
    const { velocidad } = this.state;
    const { onTerminar } = this.props;
    const index = this.state.texto.length;

    if (index < texto.length) {
      this.setState({ texto: texto.substr(0, index + 1) });
      this.timer = setTimeout(() => this.escribirTexto(texto), velocidad);
    } else {
      onTerminar && onTerminar(); // si se proporciona una función de finalización, llámela
      this.timer = setTimeout(() => this.borrarTexto(texto), 1000);
    }
  }

  borrarTexto = (texto) => {
    const { velocidad } = this.state;
    const index = this.state.texto.length;

    if (index > 0) {
      this.setState({ texto: texto.substr(0, index - 1) });
      this.timer = setTimeout(() => this.borrarTexto(texto), velocidad);
    } else {
      const { palabras } = this.props;
      const indice = (this.state.indice + 1) % palabras.length;
      this.setState({ indice });
      this.escribirTexto(palabras[indice]);
    }
  }

  render() {
    return (
      <span>{this.state.texto}</span>
    );
  }
}

export default TextoMaquinaEscribir;