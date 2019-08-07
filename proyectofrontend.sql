-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-12-2018 a las 07:05:05
-- Versión del servidor: 10.1.32-MariaDB
-- Versión de PHP: 7.2.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyectofrontend`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(11) NOT NULL,
  `id_creador` int(11) NOT NULL,
  `id_post` int(11) NOT NULL,
  `comentario` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`id`, `id_creador`, `id_post`, `comentario`) VALUES
(1, 1, 1, 'muy buena publicacion'),
(2, 5, 11, 'a'),
(3, 4, 11, 'Excelente post');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `publicaciones`
--

CREATE TABLE `publicaciones` (
  `id` int(11) NOT NULL,
  `Titulo` varchar(250) NOT NULL,
  `SubTitulo` varchar(250) DEFAULT NULL,
  `Descripcion` varchar(4000) NOT NULL,
  `Imagen` varchar(250) NOT NULL,
  `creador_id` int(11) DEFAULT NULL,
  `vistas` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `publicaciones`
--

INSERT INTO `publicaciones` (`id`, `Titulo`, `SubTitulo`, `Descripcion`, `Imagen`, `creador_id`, `vistas`) VALUES
(1, 'Titulo Pendiente', 'Subtitulo /Fecha de publicacion', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia non dolore ducimus blanditiis, fugiat perspiciatis quidem soluta quis inventore dolor sed magnam. Officia iure consequatur deserunt corporis eaque omnis suscipit.', '/images/FondoNoche.jpg', 2, 1),
(2, 'Titulo prueba 2', 'Los subtitulos tambien pueden ser fechas', 'Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.\r\n\r\nThestral dirigible plums, Viktor Krum hexed memory charm Animagus Invisibility Cloak three-headed Dog. Half-Blood Prince Invisibility Cloak cauldron cakes, hiya Harry! Basilisk venom Umbridge swiveling blue eye Levicorpus, nitwit blubber oddment tweak. Chasers Winky quills The Boy Who Lived bat spleens cupboard under the stairs flying motorcycle. Sirius Black Holyhead Harpies, you’ve got dirt on your nose. Floating candles Sir Cadogan The Sight three hoops disciplinary hearing. Grindlewald pig’s tail Sorcerer\'s Stone biting teacup. Side-along dragon-scale suits Filch 20 points, Mr. Potter.\r\n\r\nAlohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed. Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks.', '/images/FondoNoche.jpg', 2, 1),
(3, 'Titulo Newpost prueba', 'probando', 'Loremmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm', '/images/bioshock1D4.jpg', 1, 5),
(4, 'Titulo Newpost prueba2', 'probando2', 'prueba numero 2.', '/images/forza5iDd0.jpg', 1, 5),
(11, 'Titulo Newpost prueba3', 'probando3', 'Prueba numero 3', '/images/starwarsgKR8.jpg', 1, 60);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `descripcion` varchar(1000) DEFAULT NULL,
  `foto` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `email`, `password`, `nombre`, `descripcion`, `foto`) VALUES
(1, 'asd@hotmail.com', 'bfd59291e825b5f2bbf1eb76569f8fe7', 'Juan', 'Fan de los autos', '/images/placeholder.jpg'),
(2, 'asd2@hotmail.com', 'bfd59291e825b5f2bbf1eb76569f8fe7', 'Pedro', 'Inventor de la lampara', '/images/placeholder.jpg'),
(3, 'asd3@hotmail.com', '297ff4a97fcda4bc0ecf0bb18168034a', 'Franco', 'Experto en capitulo de los simpsons', '/images/FondoNoche.jpg'),
(4, 'asd4@hotmail.com', 'bfd59291e825b5f2bbf1eb76569f8fe7', 'Jorge Luis', 'Fan de harry potter y geologia', '/images/FondoNoche.jpg'),
(5, 'asd5@hotmail.com', 'bfd59291e825b5f2bbf1eb76569f8fe7', 'Juan Perez', 'Lorem x1000 caracteres', '/images/SkyrimtPzJm.jpg'),
(6, 'asd6@hotmail.com', 'bfd59291e825b5f2bbf1eb76569f8fe7', NULL, NULL, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `publicaciones`
--
ALTER TABLE `publicaciones`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `publicaciones`
--
ALTER TABLE `publicaciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
