import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { firstUnit: "Kilogramy", firstValue: 0, secondUnit: "Dekagramy", secondValue: 0 };
    this.formRender = this.formRender.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
    this.selectSecondUnit = this.selectSecondUnit.bind(this);
    this.handleSecondChange = this.handleSecondChange.bind(this);
  }
  formRender() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <select value={this.state.firstUnit} onChange={this.handleChange}>
            <option value="Metry">Metry</option>
            <option value="MegaBajty">MegaBajty</option>
            <option value="Sekundy">Sekundy</option>
            <option value="Celsjusza">Stopnie Celsjusza</option>
            <option value="Kilogramy">Kilogramy</option>
            <option value="Kiury">Kiury</option>
            <option value="Litry">Litry</option>
          </select>
          <input type="number" value={this.state.firstValue} onChange={this.handleValueChange}></input>
          <this.selectSecondUnit></this.selectSecondUnit>
          <input type="submit" value="Przelicz"></input>
          <br></br>
        </form>
      </>
    )
  }
  handleChange(event) {
    this.setState({ firstUnit: event.target.value });
  }
  handleSubmit(event) {
    let firstUnit = this.state.firstUnit;
    let secondUnit = this.state.secondUnit;
    let secondValue = this.state.secondValue;
    let firstValue = this.state.firstValue;
    if (secondUnit == "Wybierz") {
      this.setState({ secondUnit: "Niepoprawna miara" });
      secondValue = "Wybierz jakąś jednostke"
    }
    if (firstUnit == "Metry") {
      if (secondUnit == "Milimetry") {
        secondValue = firstValue * 1000;
      }
      else if (secondUnit == "Centymetry") {
        secondValue = firstValue * 100;
      } else if (secondUnit == "Decymetry") {
        secondValue = firstValue * 10;
      }
      else if (secondUnit == "Kilometry") {
        secondValue = firstValue * 0.001;
      }
      else if (secondUnit == "Stopy") {
        secondValue = firstValue * 3.28084;
      }
      else if (secondUnit == "Cale") {
        secondValue = firstValue * 39.37008;
      }
    }
    else if (firstUnit == "MegaBajty") {
      if (secondUnit == "Bajty") {
        secondValue = firstValue * 1048576;
      }
      else if (secondUnit == "KiloBajty") {
        secondValue = firstValue * 1024;
      }
      if (secondUnit == "Gigabajty") {
        secondValue = firstValue * 0.000976;
      }
      if (secondUnit == "TeraBajty") {
        secondValue = firstValue * 0.0000000976;
      }
    }
    else if (firstUnit == "Sekundy") {
      if (secondUnit == "Milisekundy") {
        secondValue = firstValue * 1000;
      }
      else if (secondUnit == "Mikrosekundy") {
        secondValue = firstValue * 1000000;
      }
      else if (secondUnit == "Nanosekundy") {
        secondValue = firstValue * 1000000000;
      }
      else if (secondUnit == "Dni") {
        secondValue = firstValue * (1 / 86400);
      }
      else if (secondUnit == "Lata") {
        secondValue = firstValue * (1 / 31536000);
      }
      else if (secondUnit == "Godziny") {
        secondValue = firstValue * (1 / 3600);
      }
      else if (secondUnit == "Minuty") {
        secondValue = firstValue * (1 / 60);
      }
    }
    else if (firstUnit == "Celsjusza") {
      if (secondUnit == "Fahrenheity") {
        secondValue = 32 + (9 / 5) * firstValue;
      }
      else if (secondUnit == "Kelwiny") {
        secondValue = parseFloat(firstValue) + 273.15;
      }
    }
    else if (firstUnit == "Kilogramy") {
      if (secondUnit == "Dekagramy") {
        secondValue = firstValue * 100;
      }
      else if (secondUnit == "Gramy") {
        secondValue = firstValue * 1000;
      }
      else if (secondUnit == "Miligramy") {
        secondValue = firstValue * 1000000;
      }
      else if (secondUnit == "Tony") {
        secondValue = firstValue * 0.001;
      }
      else if (secondUnit == "Funt") {
        secondValue = firstValue * 2.2046;
      }
    }
    else if (firstUnit == "Litry") {
      if (secondUnit == "Mililitry") {
        secondValue = firstValue * 1000;
      }
      else if (secondUnit == "Metry sześcienne") {
        secondValue = firstValue * 0.001;
      }
      else if (secondUnit == "Kilometry sześcienne") {
        secondValue = firstValue * 0.0000000000001;
      }
    }
    else if (firstUnit == "Kiury") {
      secondValue = firstValue * 3.7 * 100000000000;
    }
    this.setState({ secondValue: secondValue });
    event.preventDefault();

  }
  handleValueChange(event) {
    this.setState({ firstValue: event.target.value });
  }
  handleSecondChange(event) {
    this.setState({ secondUnit: event.target.value });
  }
  selectSecondUnit() {
    let arrayOfUnits = [];
    let firstUnitSelected = this.state.firstUnit;
    arrayOfUnits.push("Wybierz");
    if (firstUnitSelected === "Kilogramy") {
      arrayOfUnits.push("Dekagramy");
      arrayOfUnits.push("Gramy");
      arrayOfUnits.push("Miligramy");
      arrayOfUnits.push("Tony");
      arrayOfUnits.push("Funt");
    }
    else if (firstUnitSelected === "Metry") {
      arrayOfUnits.push("Milimetry");
      arrayOfUnits.push("Centymetry");
      arrayOfUnits.push("Decymetry");
      arrayOfUnits.push("Kilometry");
      arrayOfUnits.push("Stopy");
      arrayOfUnits.push("Cale");
    }
    else if (firstUnitSelected === "MegaBajty") {
      arrayOfUnits.push("Bajty");
      arrayOfUnits.push("KiloBajty");
      arrayOfUnits.push("Gigabajty");
      arrayOfUnits.push("TeraBajty");
    }
    else if (firstUnitSelected === "Sekundy") {
      arrayOfUnits.push("Minuty");
      arrayOfUnits.push("Godziny");
      arrayOfUnits.push("Dni");
      arrayOfUnits.push("Lata");
      arrayOfUnits.push("Milisekundy");
      arrayOfUnits.push("Mikrosekundy");
      arrayOfUnits.push("Nanosekundy");
    }
    else if (firstUnitSelected === "Kiury") {
      arrayOfUnits.push("Bekerele");
    }
    else if (firstUnitSelected === "Litry") {
      arrayOfUnits.push("Mililitry");
      arrayOfUnits.push("Metry sześcienne");
      arrayOfUnits.push("Kilometry sześcienne");
    }
    else if (firstUnitSelected === "Celsjusza") {
      arrayOfUnits.push("Fahrenheity");
      arrayOfUnits.push("Kelwiny");
    }

    const renderSelect = arrayOfUnits.map((text, index) => {
      return <option value={text} key={index}>{text}</option>
    })
    return (
      <>
        <select value={this.state.secondUnit} onChange={this.handleSecondChange}>
          {renderSelect}
        </select>
      </>
    )
  }
  render() {
    return (
      <>
        <div className='mainMenu'>
          <h1 className='siteName'>Przelicznik jednostek</h1>
          <this.formRender></this.formRender>
        </div>
        <div className='resultMenu'>
          <p>Pierwsza jednostka: {this.state.firstUnit} jej miara {this.state.firstValue}</p>
          <br></br>
          <p>Druga jednostka: {this.state.secondUnit} jej miara {this.state.secondValue}</p>
        </div>
      </>
    )
  }
}

ReactDOM.render(
  <>
    <MainMenu></MainMenu>
  </>,
  document.getElementById('root')
);
