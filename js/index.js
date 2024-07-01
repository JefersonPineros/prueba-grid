class Vehiculo {

    constructor(tipo, cantRuedas, color, marca, stateMotor) {
        this.tipo = tipo;
        this.cantRuedas = cantRuedas;
        this.color = color;
        this.marca = marca;
        this.stateMotor = stateMotor;
    }

    prenderMotor() {
        if (this.stateMotor != false) {
            console.log('El motor esta prendido');
            console.log(this.stateMotor);
        } else {
            this.stateMotor = true;
            console.log('El motor esta prendido');
            console.log(this.stateMotor);
        }

    }

    acelerar() {

    }

    frenar() {

    }
}

class Tractomula extends Vehiculo {
    constructor(tipo, cantRuedas, color, marca, carga, contenedor) {
        super(tipo, cantRuedas, color, marca);
        this.carga = carga;
        this.contenedor = contenedor;
    }
}


const listUrl = ['./views/pageHome.html', './views/page2.html', './views/page3.html'];

var carro;
var tractomula;

function crearVehiculo(tipo) {
    switch (tipo) {
        case 'carro':

            carro = new Vehiculo('camioneta', 4, 'negro', 'Chevrolet', false);

            carro.cantRuedas = 6;
            console.log(carro);
            break;

        case 'tractomula':
            tractomula = new Tractomula('tracto camion', 16, 'gris', 'Cualquiera', 16, 28);
            console.log(tractomula);
            break;

        case 'Camion':

            break;

        default:
            break;
    }
}

function prenderMotorCarro() {
    carro.prenderMotor();
    console.log(carro);
}

function changePages(numberButton) {

    if (numberButton != 0 && numberButton != undefined) {
        switch (numberButton) {
            case 1:
                window.location = listUrl[0];
                break;
            case 2:
                window.location = listUrl[1];
                break;
            case 3:
                window.location = listUrl[2];
                break;

            default:
                break;
        }
    } else {
        console.log('No ha seleccionado algo');
    }
}