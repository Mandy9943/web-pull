import React from "react";
import Link from "next/link";
import "./ShopEditMenu.sass";

export default function ShopEditMenu({ cb }) {
    return (
        <section className="edit-menu-menu">
            <header>
                <h4>Menu</h4>
                <p>Selecciona las categorias para que los compradores puedan ver tus
                productos y visitar tu tienda</p>
            </header>
            <div>
                <select name="select" >
                    <option value="value0">Seleccione una categoria</option>
                    <option value="value1">Value 1</option>
                    <option value="value2" >Value 2</option>
                    <option value="value3">Value 3</option>
                </select>
            </div>
            <footer>
                <button
                    style={{
                        backgroundColor: '#b9b9b9',
                        color: 'white'
                    }}
                    onClick={(e) => {
                        e.preventDefault();
                    }}
                >Confirmar</button>
                <button
                    style={{
                        backgroundColor: '#F3F3F3',
                        color: 'red'
                    }}
                    onClick={(e) => {
                        cb('edit', e)
                    }}
                >Cancelar</button>
            </footer>
        </section>
    );
}