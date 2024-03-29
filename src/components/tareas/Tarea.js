import React, { useContext } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareasContext';

const Tarea = ({tarea}) => {

    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;
    const [ proyectoActual ] = proyecto;

    const tareasContext = useContext(TareaContext);
    const { eliminarTarea, obtenerTareas,cambiarEstadoTarea, guardarTareaActual } = tareasContext;

    // funcion eliminar tarea|
    const tareaEliminar = tareaId => {
        eliminarTarea(tareaId);
        obtenerTareas(proyectoActual.id);
    }

    const cambiarEstado = tarea => {
        if(tarea.estado){
            tarea.estado = false;
        } else {
            tarea.estado = true;
        }
        cambiarEstadoTarea(tarea);
    }

    const seleccionarTarea = tarea => {
        guardarTareaActual(tarea);
    }

    return (
        <li className="tarea sombra">
            <p>{tarea.nombre}</p>

            <div className="estado">
                {tarea.estado
                ?
                    (
                        <button
                            type="button"
                            onClick={()=> cambiarEstado(tarea)}
                            className="completo"
                        >Completo</button>
                    )
                :
                    (
                        <button
                            type="button"
                            onClick={()=> cambiarEstado(tarea)}
                            className="incompleto"
                        >Incompleto</button>
                    )
                }
            </div>

            <div className="acciones">
                <button
                    type="button"
                    onClick={()=> seleccionarTarea(tarea)}
                    className="btn btn-primario"
                    >Editar</button>
                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={() => tareaEliminar(tarea.id)}
                >Eliminar</button>
            </div>
        </li>
    );
}

export default Tarea;