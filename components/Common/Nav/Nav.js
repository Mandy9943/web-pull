import React, { Component } from 'react';
import Link from 'next/link';
import Logo from '../Logo/Logo';
import './Nav.css';
import './notification.css';
import './modal-home.css';
import './modal-account.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getData } from '../../../services/userApi';
import Modal from '../Modal/Modal';
import NotificationItem from '../NotificationItem';
import MenuCategories from '../MenuCategories';
import {
    faBars,
    faSearch,
    faAngleDown,
    faHome,
    faAlignLeft,
    faArrowDown,
    faServer,
    faQuestion,
    faBell,
    faUser,
    faMoneyBillWave,
    faShoppingBag,
    faCog,
    faTag,
} from '@fortawesome/free-solid-svg-icons';
import Autocomplete from 'react-autocomplete-2';
import { searchSuggestions } from '../../../services/productsApi';
import { suggestionQuantity } from '../../../lib/config';
import { signOut } from '../../../lib/auth';
import Router, { withRouter } from 'next/router'

class Nav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modal2: false,
			showCategories: false,
			categories: [],
			showMenu: false,
			showNotification: false,
			notifications: [],
			timeClose: undefined,
			closeSidebar: true,
			value: this.props.actualSearch,
			suggestions: [],
			modalLogout: false,
		};
		this.toggleModalLogout = this.toggleModalLogout.bind(this);
	}

    toggleModalLogout() {
        this.setState({ modalLogout: !this.state.modalLogout });
    }

    logout() {
        signOut();
        document.location = '/';
    }

    /********************* START NOTIFICATIONS ******************************/
    loadNotifications = () => {
        const endp = '/getNotifications';
        console.log('LoadNotifications');
        // console.log(this.props)
        getData(endp, this.props.jwt).then((response) => {
            this.setState({ notifications: response.data });
            // console.log(response.data);
            setTimeout(this.loadNotifications, 60000);
        });
    };

    mEnter = () => {
        clearTimeout(this.state.timeClose);
    };
    mLeave = () => {
        this.state.timeClose = setTimeout(() => {
            this.setState({ showNotification: false });
        }, 1000);
    };
    /********************* END NOTIFICATIONS ******************************/

    mEnterMenu = () => {
        clearTimeout(this.state.timeClose);
    };
    mLeaveMenu = () => {
        this.state.timeClose = setTimeout(() => {
            this.setState({ showMenu: false });
        }, 1000);
    };

    toggleModal = (modal) => {
        const newState = { ...this.state };
        newState[`modal${modal}`] = !newState[`modal${modal}`] ? true : false;
        this.setState(newState);
    };

    showHideMenu = () => {
        this.setState({ showMenu: !this.state.showMenu });
        this.state.timeClose = setTimeout(() => {
            this.setState({ showMenu: false });
        }, 3000);
    };

    showHideNotification = () => {
        this.setState({ showNotification: !this.state.showNotification });
    };

    menuBlur = () => {
        setTimeout(() => this.setState({ showMenu: false }), 200);
    };

    boldString = (str, find) => {
        let re = new RegExp(find, 'g');
        return str.replace(re, find.bold());
    };

    onChange = (event) => {
        this.setState({ value: event.target.value });
        if (event.target.value !== '') {
            let suggestions = searchSuggestions(suggestionQuantity, event.target.value);
            suggestions.then((response) => {
                let filterResponse = response.data.results.map((item) => ({
                    text: this.boldString(item.alias, this.state.value),
                }));
                this.setState({ suggestions: filterResponse });
            });
        }
    };

    onKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.search();
        }
    };

    onSuggestionSelected = (suggestion) => {
        let text = suggestion.replace(/<\/?[^>]+(>|$)/g, '');
        this.setState({ value: text });
        this.search(text);
    };

    componentDidMount() {
        getData('/getCategoriesForMenu').then((response) => {
            this.setState({ categories: response.data });
        });
        if (this.props.authenticated) {
            this.loadNotifications();
        }
    }

    setValue(val) {
        this.setState({ value_message: val });
    }

    mouseEnter = () => {
        this.setState({ showCategories: true });
    };

    mouseLeave = () => {
        this.setState({ showCategories: false });
    };

		return (
			<>
				<div className="nav">
					<div className="nav-content desktop-nav">
						<div className="nav-top">
							<Logo />
							<div className="search-bar">
								<Autocomplete
									aria-activedescendant='data'
									getItemValue={(item) => item.text}
									suggestionsMenuId="search-suggestions"
									items={suggestions}
									renderItem={(item, isHighlighted) => (
										<div
											className="suggestion-item"
											aria-selected={isHighlighted}
											style={{ background: isHighlighted ? '#ddd' : 'white' }}
										>
											<span dangerouslySetInnerHTML={{ __html: item.text }} />
										</div>
									)}
									value={this.state.value}
									onChange={this.onChange}
									onSelect={this.onSuggestionSelected}
									inputProps={{
										placeholder: 'Buscar productos...',
										onKeyPress: this.onKeyPress,
									}}
									autoHighlight={false}
								/>
								<section
									onClick={(event) => {
										this.search();
									}}
									className="icon"
								>
									<a
										onClick={(event) => {
											this.search();
										}}
									>
										<FontAwesomeIcon icon={faSearch} />
									</a>
								</section>
							</div>
							{!authenticated && (
								<div className="user-menu">
									
										<Link href="/login"><a>Iniciar sesión</a></Link>
										<Link href="/registro"><a>Registrarse</a></Link>
									
								</div>
							)}
							{authenticated && (
								<div className="user-menu" onBlur={this.menuBlur}>
									<ul>
										<span>
											<Link href="/ayuda"><a className="bell">Ayuda / PQR</a></Link>
											<a className="bell" onClick={() => this.showHideNotification()}>
												<FontAwesomeIcon icon={faBell} />
												{this.state.notifications.length > 0 ? (
													<span className="accent-background">
														{this.state.notifications.length}
													</span>
												) : null}
											</a>
										</span>
										<a onClick={() => this.showHideMenu()} className="user-icon">
											<FontAwesomeIcon icon={faUser} /> {this.props.user.replace(/%20/g, ' ')}{' '}
											<FontAwesomeIcon icon={faAngleDown} />
										</a>
										<section
											onMouseEnter={() => this.mEnterMenu()}
											onMouseLeave={() => this.mLeaveMenu()}
											className={this.state.showMenu ? 'menu-off menu-on' : 'menu-off'}
										>
											<h5>
												<FontAwesomeIcon className="icon" icon={faUser} />
												<b className="name"> Hola, {this.props.user.replace(/%20/g, ' ')}</b> Bienvenido a
												Kiero Marketplace
											</h5>
											<section className="options">
												<hr />
												<Link href="/cuenta"><a className="items">
														{' '}
														<FontAwesomeIcon icon={faUser} />
														Mi cuenta
												</a></Link>
												{this.props.role === 'user' && (
													<Link href="/cuenta#compras"><a className="items">
															{' '}
															<FontAwesomeIcon icon={faShoppingBag} />
															Compras
													</a></Link>
												)}
												{this.props.role === 'vendedor' && (
													<Link href="/cuenta#ventas"><a className="items">
															{' '}
															<FontAwesomeIcon icon={faTag} />
															Ventas
													</a></Link>
												)}
												<Link href="/cuenta"><a className="items">
														{' '}
														<FontAwesomeIcon icon={faServer} />
														Resumen
												</a></Link>
												{this.props.role === 'user' && (
													<Link href="/cuenta#facturacion"><a className="items">
															{' '}
															<FontAwesomeIcon icon={faMoneyBillWave} />
															Facturacion
													</a></Link>
												)}
												<Link href="/cuenta#opciones"><a className="items">
														{' '}
														<FontAwesomeIcon icon={faCog} />
														Mis datos
												</a></Link>
												<hr />
												<a
													style={{ cursor: 'pointer' }}
													onClick={this.toggleModalLogout}
													className="items"
												>
													Cerrar sesión
												</a>
											</section>
										</section>
										<section
											onMouseEnter={() => this.mEnter()}
											onMouseLeave={() => this.mLeave()}
											className={
												this.state.showNotification
													? 'notification-off notification-on'
													: 'notification-off'
											}
										>
											<div className="triangle-up" />
											<h3 className="title">Notificaciones</h3>
											{this.state.notifications.length > 0 ? (
												this.state.notifications.map(function (notification, i) {
													return <NotificationItem key={i} data={notification} />;
												})
											) : (
												<b>
													<br />
													No tienes notificaciones.
													<br />
													<br />
												</b>
											)}
											<Link href={'/cuenta'}><a>
													<h4 className="see-all">Ver todas las notificaciones</h4>
											</a></Link>
										</section>
									</ul>
								</div>
							)}
						</div>
						<div className="nav-botton">
							<div className="main-menu">
								<ul>
									<section className="menu">
										<ul>
											<li
												onMouseEnter={this.mouseEnter}
												onClick={this.mouseEnter}
												style={{ cursor: 'pointer' }}
											>
												Categorías <FontAwesomeIcon icon={faAngleDown} />
											</li>
										</ul>
									</section>
									<Link href={"/categoria/[...category]"} as="/categoria/Bebés" >
										<a>
											Bebés
										</a>
									</Link>
									<Link href={"/categoria/[...category]"} as="/categoria/Belleza" >
										<a>
											Belleza
										</a>
									</Link>
									<Link href={"/categoria/[...category]"} as="/categoria/Cámaras-fotografía-y-video">
										<a>
											Cámaras
										</a>
									</Link>
									<Link href={"/categoria/[...category]"} as="/categoria/Electrodomésticos">
										<a>
											Electrodomésticos
										</a>
									</Link>
									<Link href={"/categoria/[...category]"} as="/categoria/Electrónica-Audio-y-Video">
										<a>
											Electrónica
										</a>
									</Link>
									<Link href={"/categoria/[...category]"} as="/categoria/Hogar">
										<a>
											Hogar
										</a>
									</Link>
									<Link href={"/categoria/[...category]"} as="/categoria/Juguetes-y-juegos">
										<a>
											Juguetes
										</a>
									</Link>
									<Link href={"/categoria/[...category]"} as="/categoria/Consolas-y-videojuegos">
										<a>
											Videojuegos
										</a>
									</Link>
									<Link href={"/categoria/[...category]"} as="/categoria/Salud">
										<a>
											Salud
										</a>
									</Link>
								</ul>
							</div>
						</div>
					</div>
					<div className="nav-content mobil-nav">
						<div className="nav-top">
							<Logo />
							<div className="search-bar">
								<Autocomplete
									aria-activedescendant='data'
									getItemValue={(item) => item.text}
									suggestionsMenuId="search-suggestions"
									items={suggestions}
									renderItem={(item, isHighlighted) => (
										<div
											className="suggestion-item"
											aria-selected={isHighlighted}
											style={{ background: isHighlighted ? '#ddd' : 'white' }}
										>
											<span dangerouslySetInnerHTML={{ __html: item.text }} />
										</div>
									)}
									value={this.state.value}
									onChange={this.onChange}
									onSelect={this.onSuggestionSelected}
									inputProps={{
										placeholder: 'Buscar productos...',
										onKeyPress: this.onKeyPress,
									}}
								/>
								<section
									onClick={(event) => {
										this.search();
									}}
									className="icon"
								>
									<a
										onClick={(event) => {
											this.search();
										}}
									>
										<FontAwesomeIcon icon={faSearch} />
									</a>
								</section>
							</div>
						</div>
						{home ? (
							<div className="nav-botton">
								{this.state.modal2 ? (
									<section className="modal-home">
										<Modal toggle={this.toggleModal} num="2" content={content2} button />
									</section>
								) : null}
								<div
									onClick={() => {
										this.toggleModal(2);
									}}
								>
									<FontAwesomeIcon icon={faBars} />
								</div>
							</div>
						) : (
							<div className="nav-botton">
								<div onClick={() => this.CloseSidebar()}>
									<FontAwesomeIcon icon={faBars} />
								</div>
							</div>
						)}
					</div>
				</div>
				{this.state.showCategories ? (
					<MenuCategories
						toggle={this.mouseLeave}
						num="2"
						categories={this.state.categories}
					/>
				) : null}

    render() {
        let authenticated = this.props.authenticated;
        let home = this.props.home;
        const { suggestions, value } = this.state;
        const contentLogoutComp = (
            <div className="modal-logout">
                <p>{'¿Estás seguro que quieres cerrar sesión?'}</p>
                <button onClick={this.logout} className="logout-button">
                    Aceptar
                </button>
                <button onClick={this.toggleModalLogout} className="cancelar-button">
                    Cancelar
                </button>
            </div>
        );
        const content2 = (
            <>
                <div className="header-modal">
                    {!authenticated ? (
                        <>
                            <h5>Bienvenido</h5>
                            <p>Crea tu cuenta o inicia sesión</p>
                            <section className="actions">
                                <Link href="/login"><a className="main-button">iniciar sesion</a></Link>
                                <Link href="/registro"><a className="main-button">Registrarse</a></Link>
                            </section>
                        </>
                    ) : (
                        <section className="user-perfil">
                            <img loading="lazy" alt="foto usuario kiero.co"
                                src="https://recap-project.eu/wp-content/uploads/2017/02/default-user.jpg" />
                            <span className="user-name">
                                <h5>Bienvenido</h5>
                                <p>{this.props.user.replace(/%20/g, ' ')}</p>
                            </span>
                        </section>
                    )}
                    <hr />
                    <Link href="/cuenta"><a>
                        <FontAwesomeIcon icon={faHome} /> <p>Inicio </p>
                    </a></Link>
                    {authenticated ? (
                        <Link href="/notificaciones"><a>
                            <FontAwesomeIcon icon={faBell} />
                            <p className="noti">
                                Notificaciones
                                {this.state.notifications.length > 0 ? (
                                    <span className="number-accent">
                                        {this.state.notifications.length}
                                    </span>
                                ) : null}
                            </p>
                        </a></Link>
                    ) : null}
                    <Link href="/lista_categorias"><a>
                        <FontAwesomeIcon icon={faAlignLeft} /> <p>Categorías</p>
                    </a></Link>
                    {/*<Link href="#"><a><FontAwesomeIcon icon={faArrowDown} /> <p>Descarga la app</p></a></Link>*/}
                    <hr />
                    <Link href="/ayuda"><a>
                        <FontAwesomeIcon icon={faQuestion} /> <p>Ayuda / PQR</p>
                    </a></Link>
                    {authenticated ? (
                        <a
                            style={{ cursor: 'pointer' }}
                            onClick={this.toggleModalLogout}
                            className="logout"
                        >
                            Cerrar sesión
                        </a>
                    ) : null}
                </div>
            </>
        );

        return (
            <>
                <div className="nav">
                    <div className="nav-content desktop-nav">
                        <div className="nav-top">
                            <Logo />
                            <div className="search-bar">
                                <Autocomplete
                                    getItemValue={(item) => item.text}
                                    suggestionsMenuId="search-suggestions"
                                    items={suggestions}
                                    renderItem={(item, isHighlighted) => (
                                        <div
                                            className="suggestion-item"
                                            aria-selected={isHighlighted}
                                            style={{ background: isHighlighted ? '#ddd' : 'white' }}
                                        >
                                            <span dangerouslySetInnerHTML={{ __html: item.text }} />
                                        </div>
                                    )}
                                    value={this.state.value}
                                    onChange={this.onChange}
                                    onSelect={this.onSuggestionSelected}
                                    inputProps={{
                                        placeholder: 'Buscar productos...',
                                        onKeyPress: this.onKeyPress,
                                    }}
                                    autoHighlight={false}
                                />
                                <section
                                    onClick={(event) => {
                                        this.search();
                                    }}
                                    className="icon"
                                >
                                    <a
                                        onClick={(event) => {
                                            this.search();
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faSearch} />
                                    </a>
                                </section>
                            </div>
                            {!authenticated && (
                                <div className="user-menu">
                                    <ul>
                                        <Link href="/login"><a>Iniciar sesión</a></Link>
                                        <Link href="/registro"><a>Registrarse</a></Link>
                                    </ul>
                                </div>
                            )}
                            {authenticated && (
                                <div className="user-menu" onBlur={this.menuBlur}>
                                    <ul>
                                        <span>
                                            <Link href="/ayuda"><a className="bell">Ayuda / PQR</a></Link>
                                            <a className="bell" onClick={() => this.showHideNotification()}>
                                                <FontAwesomeIcon icon={faBell} />
                                                {this.state.notifications.length > 0 ? (
                                                    <span className="accent-background">
                                                        {this.state.notifications.length}
                                                    </span>
                                                ) : null}
                                            </a>
                                        </span>
                                        <a onClick={() => this.showHideMenu()} className="user-icon">
                                            <FontAwesomeIcon icon={faUser} /> {this.props.user.replace(/%20/g, ' ')}{' '}
                                            <FontAwesomeIcon icon={faAngleDown} />
                                        </a>
                                        <section
                                            onMouseEnter={() => this.mEnterMenu()}
                                            onMouseLeave={() => this.mLeaveMenu()}
                                            className={this.state.showMenu ? 'menu-off menu-on' : 'menu-off'}
                                        >
                                            <h5>
                                                <FontAwesomeIcon className="icon" icon={faUser} />
                                                <b className="name"> Hola, {this.props.user.replace(/%20/g, ' ')}</b> Bienvenido
                                                a
                                                Kiero Marketplace
                                            </h5>
                                            <section className="options">
                                                <hr />
                                                <Link href="/cuenta"><a className="items">
                                                    {' '}
                                                    <FontAwesomeIcon icon={faUser} />
                                                    Mi cuenta
                                                </a></Link>
                                                {this.props.role === 'user' && (
                                                    <Link href="/cuenta#compras"><a className="items">
                                                        {' '}
                                                        <FontAwesomeIcon icon={faShoppingBag} />
                                                        Compras
                                                    </a></Link>
                                                )}
                                                {this.props.role === 'vendedor' && (
                                                    <Link href="/cuenta#ventas"><a className="items">
                                                        {' '}
                                                        <FontAwesomeIcon icon={faTag} />
                                                        Ventas
                                                    </a></Link>
                                                )}
                                                <Link href="/cuenta"><a className="items">
                                                    {' '}
                                                    <FontAwesomeIcon icon={faServer} />
                                                    Resumen
                                                </a></Link>
                                                {this.props.role === 'user' && (
                                                    <Link href="/cuenta#facturacion"><a className="items">
                                                        {' '}
                                                        <FontAwesomeIcon icon={faMoneyBillWave} />
                                                        Facturacion
                                                    </a></Link>
                                                )}
                                                <Link href="/cuenta#opciones"><a className="items">
                                                    {' '}
                                                    <FontAwesomeIcon icon={faCog} />
                                                    Mis datos
                                                </a></Link>
                                                <hr />
                                                <a
                                                    style={{ cursor: 'pointer' }}
                                                    onClick={this.toggleModalLogout}
                                                    className="items"
                                                >
                                                    Cerrar sesión
                                                </a>
                                            </section>
                                        </section>
                                        <section
                                            onMouseEnter={() => this.mEnter()}
                                            onMouseLeave={() => this.mLeave()}
                                            className={
                                                this.state.showNotification
                                                    ? 'notification-off notification-on'
                                                    : 'notification-off'
                                            }
                                        >
                                            <div className="triangle-up" />
                                            <h3 className="title">Notificaciones</h3>
                                            {this.state.notifications.length > 0 ? (
                                                this.state.notifications.map(function (notification, i) {
                                                    return <NotificationItem key={i} data={notification} />;
                                                })
                                            ) : (
                                                <b>
                                                    <br />
                                                    No tienes notificaciones.
                                                    <br />
                                                    <br />
                                                </b>
                                            )}
                                            <Link href={'/cuenta'}><a>
                                                <h4 className="see-all">Ver todas las notificaciones</h4>
                                            </a></Link>
                                        </section>
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div className="nav-botton">
                            <div className="main-menu">
                                <ul>
                                    <section className="menu">
                                        <ul>
                                            <li
                                                onMouseEnter={this.mouseEnter}
                                                onClick={this.mouseEnter}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                Categorías <FontAwesomeIcon icon={faAngleDown} />
                                            </li>
                                        </ul>
                                    </section>
                                    <a href="/categoria/Bebés">
                                        Bebés
                                    </a>
                                    <a href="/categoria/Belleza">
                                        Belleza
                                    </a>
                                    <a
                                        // href="/categoria/[category]" as="/categoria/Cámaras, fotografía y video"
                                        href="/categoria/Cámaras-fotografía-y-video">
                                        Cámaras
                                    </a>
                                    <a href="/categoria/Electrodomésticos">
                                        Electrodomésticos
                                    </a>
                                    <a
                                        href="/categoria/Electrónica-Audio-y-Video">
                                        Electrónica
                                    </a>
                                    <a href="/categoria/Hogar">
                                        Hogar
                                    </a>
                                    <a href="/categoria/Juguetes-y-juegos">
                                        Juguetes
                                    </a>
                                    <a
                                        href="/categoria/Consolas-y-videojuegos">
                                        Videojuegos
                                    </a>
                                    <a href="/categoria/Salud">
                                        Salud
                                    </a>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="nav-content mobil-nav">
                        <div className="nav-top">
                            <Logo />
                            <div className="search-bar">
                                <Autocomplete
                                    getItemValue={(item) => item.text}
                                    suggestionsMenuId="search-suggestions"
                                    items={suggestions}
                                    renderItem={(item, isHighlighted) => (
                                        <div className="suggestion-item" style={{ background: 'white' }}>
                                            {item.text}
                                        </div>
                                    )}
                                    value={this.state.value}
                                    onChange={this.onChange}
                                    onSelect={this.onSuggestionSelected}
                                    inputProps={{
                                        placeholder: 'Buscar productos...',
                                        onKeyPress: this.onKeyPress,
                                    }}
                                />
                                <section
                                    onClick={(event) => {
                                        this.search();
                                    }}
                                    className="icon"
                                >
                                    <a
                                        onClick={(event) => {
                                            this.search();
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faSearch} />
                                    </a>
                                </section>
                            </div>
                        </div>
                        {home ? (
                            <div className="nav-botton">
                                {this.state.modal2 ? (
                                    <section className="modal-home">
                                        <Modal toggle={this.toggleModal} num="2" content={content2} button />
                                    </section>
                                ) : null}
                                <div
                                    onClick={() => {
                                        this.toggleModal(2);
                                    }}
                                >
                                    <FontAwesomeIcon icon={faBars} />
                                </div>
                            </div>
                        ) : (
                            <div className="nav-botton">
                                <div onClick={() => this.CloseSidebar()}>
                                    <FontAwesomeIcon icon={faBars} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                {this.state.showCategories ? (
                    <MenuCategories
                        toggle={this.mouseLeave}
                        num="2"
                        categories={this.state.categories}
                    />
                ) : null}

                {this.state.modalLogout ? (
                    <Modal toggle={this.toggleModalLogout} content={contentLogoutComp} button />
                ) : null}
            </>
        );
    }

			let url = '/busqueda/';
			this.state.value !== undefined && ots === ''
				? (url = url + this.state.value)
				: (url = url + ots);
			document.location = url;
		}
	};
}

export default withRouter(Nav)