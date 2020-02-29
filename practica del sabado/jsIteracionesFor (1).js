

//b)Para la gestión de un hotel,
//ingresar los siguientes datos validados de una reserva
//nombre del huésped
//cantidad de personas 
//cantidad de dia de estadia 
//forma de pago(efectivo , tarjeta o QR)

//informar el huésped que trajo más personas en una sola reserva.
//la cantidad de personas que se quedaron más días
//la forma de pago más utilizada.
//el promedio de cantidad de días por reserva

function mostrar()
{



var maxCanPers;
var cantidadPersonas;
var maxCantPersonasHuesped;
var maxDias;
var maxDiasCantPersonas;
var cantDeReser;
var cantDeDias;
var promedio;
var formDePagoMasUsado;

var contEfectivo=0;
var contadTarg=0;
var contadorQR=0;
var contadorReserv=0;
var acumDeDias=0;
{       var pregunta=prompt("si se va a registrar escriva si: ");
        
        while(pregunta=="si")
            {
                contadorReserv++
                var nombre=prompt("ingrese nombre: ");
                
                
                       cantidadPersonas=(prompt("cuantas personas: "));
                       while(isNaN(cantidadPersonas)||cantidadPersonas<1)
                    {
                          cantidadPersonas =prompt("error ingrese un numero valido: ");
                          cantidadPersonas =parseInt(cantidadPersonas);
                    }
                            cantDeDias=prompt("Cuantos dias se ospedaran en el hotel: ");
                            while(isNaN(cantDeDias)||cantDeDias<1)
                            {
                             cantDeDias=prompt("error ingrese un numero valido: ");
                             cantDeDias=prompt(cantDeDias);
                            }
                            var formPago=prompt("va a pagar con efectivo o tarjeta o QR?:  ");
                             while(formPago!="efectivo"&&formPago!="tarjeta"&&formPago!="QR")
                             {
                                 formPago=prompt("error ingrese una forma de pago valida: ");

                             }
                             
                            if(maxCanPers>cantidadPersonas|| contadorReserv==1)
                            {
                                maxCanPers=cantidadPersonas;
                                maxCantPersonasHuesped=nombre;
                            }
                            if(maxDias>cantDeDias||contadorReserv==1)
                            {
                                maxDias=cantDeDias;
                                maxDiasCantPersonas=cantidadPersonas;
                            }
                            switch(formPago)
                            {
                                case"QR":
                                contadorQR=contadorQR+1
                                break;
                                case"efectivo":
                                contEfectivo=contEfectivo+1
                                break;
                                default:
                                contadTarg++;
                                break
                            }
                            
                                           
            acumDeDias+acumDeDias+cantDeDias;
            pregunta=prompt("si va a registrar escriva si: ");
            }
           

 }
 promedio=acumDeDias/contadorReserv;
 if(contadorQR>contEfectivo&&contadorQR<contadTarg)
 {
    formDePagoMasUsado="tarjeta"; 
 }else
{
    formDePagoMasUsado="efectivo";
}
document.write(("Huesped que trajo mayor cantidad de personas :")+maxCantPersonasHuesped+"<br>");
document.write(("personas que se quedaron mas dias :")+maxDiasCantPersonas+"<br>");
document.write(("forma de pago mas usado :")+formDePagoMasUsado+"<br>");
document.write(("promedio cantidad de dias por reserva :")+promedio+"<br>");
     
} 

		 
       