import React, { Fragment } from 'react';

export default (props) => {

  // alterne o valor de retorno da função entre false e true e veja o resultado na execução
  const condicao = () => {
    return true;
  };

  const executaAntes = () => {
    // Testa uma condição e caso seja verdadeira executa a função onClick
    // original do componente filho se não uma executa função anternativa
    if (condicao() === true) {
      props.children.props.onClick();
    } else {
      alert("Executou onClick do clone");
    }
  };

  const renderChildren = () => {
    return React.Children.map(props.children, clone => {
      return React.cloneElement(clone, {
        onClick: executaAntes
      });
    });
  }

  return <Fragment>{renderChildren()}</Fragment>
}
