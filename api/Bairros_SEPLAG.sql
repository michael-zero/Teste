-- --------------------------------------------------------
-- Servidor:                     localhost
-- Versão do servidor:           10.1.9-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win32
-- HeidiSQL Versão:              9.2.0.4947
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Copiando estrutura do banco de dados para db_simappv2_atual
CREATE DATABASE IF NOT EXISTS `db_simappv2_atual` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `db_simappv2_atual`;


-- Copiando estrutura para tabela db_simappv2_atual.orcamento_participativo_bairro
CREATE TABLE IF NOT EXISTS `orcamento_participativo_bairro` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_orgao_associado` char(3) DEFAULT NULL,
  `nome_bairro` varchar(100) NOT NULL COMMENT 'Nome do programa a ser usado no site',
  `usuario` int(11) DEFAULT NULL COMMENT 'Usuário de Cadastro do registro.',
  `usuario_atualizacao` int(11) DEFAULT NULL COMMENT 'Usuário de Atualização do registro.',
  `cadastro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Data/Hora do Cadastro',
  `atualizacao` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT 'Data/Hora da atualização',
  `ativo` enum('S','N') NOT NULL DEFAULT 'S',
  PRIMARY KEY (`id`),
  KEY `FK_Orc_Particip_Bairro_Org` (`id_orgao_associado`),
  CONSTRAINT `FK_Orc_Particip_Bairro_Org` FOREIGN KEY (`id_orgao_associado`) REFERENCES `orgao` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=123 DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- Copiando dados para a tabela db_simappv2_atual.orcamento_participativo_bairro: ~122 rows (aproximadamente)
/*!40000 ALTER TABLE `orcamento_participativo_bairro` DISABLE KEYS */;
INSERT INTO `orcamento_participativo_bairro` (`id`, `id_orgao_associado`, `nome_bairro`, `usuario`, `usuario_atualizacao`, `cadastro`, `atualizacao`, `ativo`) VALUES
	(1, '018', 'AEROPORTO', NULL, NULL, '2021-05-13 16:38:59', '0000-00-00 00:00:00', 'S'),
	(2, '018', 'CABRAL', NULL, NULL, '2021-05-13 16:38:59', '0000-00-00 00:00:00', 'S'),
	(3, '018', 'CENTRO', NULL, NULL, '2021-05-13 16:38:59', '0000-00-00 00:00:00', 'S'),
	(4, '018', 'FREI SERAFIM', NULL, NULL, '2021-05-13 16:38:59', '0000-00-00 00:00:00', 'S'),
	(5, '018', 'ILHOTAS', NULL, NULL, '2021-05-13 16:38:59', '0000-00-00 00:00:00', 'S'),
	(6, '018', 'MAFUÁ', NULL, NULL, '2021-05-13 16:38:59', '0000-00-00 00:00:00', 'S'),
	(7, '018', 'MARQUÊS', NULL, NULL, '2021-05-13 16:38:59', '0000-00-00 00:00:00', 'S'),
	(8, '018', 'MATADOURO', NULL, NULL, '2021-05-13 16:38:59', '0000-00-00 00:00:00', 'S'),
	(9, '018', 'MATINHA', NULL, NULL, '2021-05-13 16:38:59', '0000-00-00 00:00:00', 'S'),
	(10, '018', 'MORRO DA ESPERANÇA', NULL, NULL, '2021-05-13 16:39:00', '0000-00-00 00:00:00', 'S'),
	(11, '018', 'NOVA BRASÍLIA', NULL, NULL, '2021-05-13 16:39:00', '0000-00-00 00:00:00', 'S'),
	(12, '018', 'PARQUE ALVORADA', NULL, NULL, '2021-05-13 16:39:00', '0000-00-00 00:00:00', 'S'),
	(13, '018', 'PIRAJÁ', NULL, NULL, '2021-05-13 16:39:00', '0000-00-00 00:00:00', 'S'),
	(14, '018', 'PORENQUANTO', NULL, NULL, '2021-05-13 16:39:00', '0000-00-00 00:00:00', 'S'),
	(15, '018', 'PRIMAVERA', NULL, NULL, '2021-05-13 16:39:00', '0000-00-00 00:00:00', 'S'),
	(16, '018', 'SÃO JOAQUIM', NULL, NULL, '2021-05-13 16:39:00', '0000-00-00 00:00:00', 'S'),
	(17, '018', 'VILA OPERÁRIA', NULL, NULL, '2021-05-13 16:39:00', '0000-00-00 00:00:00', 'S'),
	(18, '039', 'ANGÉLICA', NULL, NULL, '2021-05-13 16:39:00', '0000-00-00 00:00:00', 'S'),
	(19, '039', 'ANGELIM', NULL, NULL, '2021-05-13 16:39:00', '0000-00-00 00:00:00', 'S'),
	(20, '039', 'AREIAS', NULL, NULL, '2021-05-13 16:39:00', '0000-00-00 00:00:00', 'S'),
	(21, '039', 'BELA VISTA', NULL, NULL, '2021-05-13 16:39:00', '0000-00-00 00:00:00', 'S'),
	(22, '039', 'BRASILAR', NULL, NULL, '2021-05-13 16:39:00', '0000-00-00 00:00:00', 'S'),
	(23, '039', 'CATARINA', NULL, NULL, '2021-05-13 16:39:00', '0000-00-00 00:00:00', 'S'),
	(24, '039', 'CIDADE NOVA', NULL, NULL, '2021-05-13 16:39:00', '0000-00-00 00:00:00', 'S'),
	(25, '039', 'CRISTO REI', NULL, NULL, '2021-05-13 16:39:00', '0000-00-00 00:00:00', 'S'),
	(26, '039', 'DISTRITO INDUSTRIAL', NULL, NULL, '2021-05-13 16:39:00', '0000-00-00 00:00:00', 'S'),
	(27, '039', 'ESPLANADA', NULL, NULL, '2021-05-13 16:39:00', '0000-00-00 00:00:00', 'S'),
	(28, '039', 'LOURIVAL PARENTE', NULL, NULL, '2021-05-13 16:39:00', '0000-00-00 00:00:00', 'S'),
	(29, '039', 'MACAÚBA', NULL, NULL, '2021-05-13 16:39:00', '0000-00-00 00:00:00', 'S'),
	(30, '039', 'MONTE CASTELO', NULL, NULL, '2021-05-13 16:39:00', '0000-00-00 00:00:00', 'S'),
	(31, '039', 'MORADA NOVA', NULL, NULL, '2021-05-13 16:39:01', '0000-00-00 00:00:00', 'S'),
	(32, '039', 'NOSSA SENHORA DAS GRAÇAS', NULL, NULL, '2021-05-13 16:39:01', '0000-00-00 00:00:00', 'S'),
	(33, '039', 'PARQUE JACINTA', NULL, NULL, '2021-05-13 16:39:01', '0000-00-00 00:00:00', 'S'),
	(34, '039', 'PARQUE JULIANA', NULL, NULL, '2021-05-13 16:39:01', '0000-00-00 00:00:00', 'S'),
	(35, '039', 'PARQUE PIAUÍ', NULL, NULL, '2021-05-13 16:39:01', '0000-00-00 00:00:00', 'S'),
	(36, '039', 'PARQUE SÃO JOÃO', NULL, NULL, '2021-05-13 16:39:01', '0000-00-00 00:00:00', 'S'),
	(37, '039', 'PARQUE SUL', NULL, NULL, '2021-05-13 16:39:01', '0000-00-00 00:00:00', 'S'),
	(38, '039', 'PEDRA MIÚDA', NULL, NULL, '2021-05-13 16:39:01', '0000-00-00 00:00:00', 'S'),
	(39, '039', 'PIÇARRA', NULL, NULL, '2021-05-13 16:39:01', '0000-00-00 00:00:00', 'S'),
	(40, '039', 'PIO XII', NULL, NULL, '2021-05-13 16:39:01', '0000-00-00 00:00:00', 'S'),
	(41, '039', 'PORTAL DA ALEGRIA', NULL, NULL, '2021-05-13 16:39:01', '0000-00-00 00:00:00', 'S'),
	(42, '039', 'PROMORAR', NULL, NULL, '2021-05-13 16:39:01', '0000-00-00 00:00:00', 'S'),
	(43, '039', 'REDENÇÃO', NULL, NULL, '2021-05-13 16:39:01', '0000-00-00 00:00:00', 'S'),
	(44, '039', 'SACI', NULL, NULL, '2021-05-13 16:39:01', '0000-00-00 00:00:00', 'S'),
	(45, '039', 'SANTA CRUZ', NULL, NULL, '2021-05-13 16:39:01', '0000-00-00 00:00:00', 'S'),
	(46, '039', 'SANTA LUZIA', NULL, NULL, '2021-05-13 16:39:01', '0000-00-00 00:00:00', 'S'),
	(47, '039', 'SANTO ANTÔNIO', NULL, NULL, '2021-05-13 16:39:01', '0000-00-00 00:00:00', 'S'),
	(48, '039', 'SÃO LOURENÇO', NULL, NULL, '2021-05-13 16:39:01', '0000-00-00 00:00:00', 'S'),
	(49, '039', 'SÃO PEDRO', NULL, NULL, '2021-05-13 16:39:01', '0000-00-00 00:00:00', 'S'),
	(50, '039', 'TABULETA', NULL, NULL, '2021-05-13 16:39:01', '0000-00-00 00:00:00', 'S'),
	(51, '039', 'TRÊS ANDARES.', NULL, NULL, '2021-05-13 16:39:01', '0000-00-00 00:00:00', 'S'),
	(52, '039', 'TRIUNFO', NULL, NULL, '2021-05-13 16:39:01', '0000-00-00 00:00:00', 'S'),
	(53, '039', 'VERMELHA', NULL, NULL, '2021-05-13 16:39:02', '0000-00-00 00:00:00', 'S'),
	(54, '040', 'ÁRVORES VERDES', NULL, NULL, '2021-05-13 16:39:02', '0000-00-00 00:00:00', 'S'),
	(55, '040', 'CAMPESTRE.', NULL, NULL, '2021-05-13 16:39:02', '0000-00-00 00:00:00', 'S'),
	(56, '040', 'CIDADE JARDIM', NULL, NULL, '2021-05-13 16:39:02', '0000-00-00 00:00:00', 'S'),
	(57, '040', 'FÁTIMA', NULL, NULL, '2021-05-13 16:39:02', '0000-00-00 00:00:00', 'S'),
	(58, '040', 'HORTO', NULL, NULL, '2021-05-13 16:39:02', '0000-00-00 00:00:00', 'S'),
	(59, '040', 'ININGA', NULL, NULL, '2021-05-13 16:39:02', '0000-00-00 00:00:00', 'S'),
	(60, '040', 'JÓQUEI', NULL, NULL, '2021-05-13 16:39:02', '0000-00-00 00:00:00', 'S'),
	(61, '040', 'MORADA DO SOL', NULL, NULL, '2021-05-13 16:39:02', '0000-00-00 00:00:00', 'S'),
	(62, '040', 'MORROS', NULL, NULL, '2021-05-13 16:39:02', '0000-00-00 00:00:00', 'S'),
	(63, '040', 'NOIVOS', NULL, NULL, '2021-05-13 16:39:02', '0000-00-00 00:00:00', 'S'),
	(64, '040', 'NOVO URUGUAI', NULL, NULL, '2021-05-13 16:39:02', '0000-00-00 00:00:00', 'S'),
	(65, '040', 'PEDRA MOLE', NULL, NULL, '2021-05-13 16:39:02', '0000-00-00 00:00:00', 'S'),
	(66, '040', 'PIÇARREIRA', NULL, NULL, '2021-05-13 16:39:02', '0000-00-00 00:00:00', 'S'),
	(67, '040', 'PLANALTO', NULL, NULL, '2021-05-13 16:39:02', '0000-00-00 00:00:00', 'S'),
	(68, '040', 'PORTO DO CENTRO', NULL, NULL, '2021-05-13 16:39:02', '0000-00-00 00:00:00', 'S'),
	(69, '040', 'RECANTO DAS PALMEIRAS', NULL, NULL, '2021-05-13 16:39:02', '0000-00-00 00:00:00', 'S'),
	(70, '040', 'SAMAPI', NULL, NULL, '2021-05-13 16:39:02', '0000-00-00 00:00:00', 'S'),
	(71, '040', 'SANTA ISABEL', NULL, NULL, '2021-05-13 16:39:02', '0000-00-00 00:00:00', 'S'),
	(72, '040', 'SANTA LIA', NULL, NULL, '2021-05-13 16:39:02', '0000-00-00 00:00:00', 'S'),
	(73, '040', 'SÃO CRISTÓVÃO', NULL, NULL, '2021-05-13 16:39:02', '0000-00-00 00:00:00', 'S'),
	(74, '040', 'SÃO JOÃO', NULL, NULL, '2021-05-13 16:39:02', '0000-00-00 00:00:00', 'S'),
	(75, '040', 'SATÉLITE', NULL, NULL, '2021-05-13 16:39:02', '0000-00-00 00:00:00', 'S'),
	(76, '040', 'SOCOPO', NULL, NULL, '2021-05-13 16:39:03', '0000-00-00 00:00:00', 'S'),
	(77, '040', 'TABAJARAS', NULL, NULL, '2021-05-13 16:39:03', '0000-00-00 00:00:00', 'S'),
	(78, '040', 'URUGUAI', NULL, NULL, '2021-05-13 16:39:03', '0000-00-00 00:00:00', 'S'),
	(79, '040', 'VALE DO GAVIÃO', NULL, NULL, '2021-05-13 16:39:03', '0000-00-00 00:00:00', 'S'),
	(80, '040', 'VALE QUEM TEM', NULL, NULL, '2021-05-13 16:39:03', '0000-00-00 00:00:00', 'S'),
	(81, '040', 'VERDE LAR', NULL, NULL, '2021-05-13 16:39:03', '0000-00-00 00:00:00', 'S'),
	(82, '040', 'ZOOBOTÂNICO', NULL, NULL, '2021-05-13 16:39:03', '0000-00-00 00:00:00', 'S'),
	(83, '041', 'BEIRA RIO', NULL, NULL, '2021-05-13 16:39:03', '0000-00-00 00:00:00', 'S'),
	(84, '041', 'BOM PRINCÍPIO', NULL, NULL, '2021-05-13 16:39:03', '0000-00-00 00:00:00', 'S'),
	(85, '041', 'COLORADO', NULL, NULL, '2021-05-13 16:39:03', '0000-00-00 00:00:00', 'S'),
	(86, '041', 'COMPRIDA', NULL, NULL, '2021-05-13 16:39:03', '0000-00-00 00:00:00', 'S'),
	(87, '041', 'EXTREMA', NULL, NULL, '2021-05-13 16:39:03', '0000-00-00 00:00:00', 'S'),
	(88, '041', 'FLOR DO CAMPO', NULL, NULL, '2021-05-13 16:39:03', '0000-00-00 00:00:00', 'S'),
	(89, '041', 'GURUPI', NULL, NULL, '2021-05-13 16:39:03', '0000-00-00 00:00:00', 'S'),
	(90, '041', 'ITARARÉ', NULL, NULL, '2021-05-13 16:39:03', '0000-00-00 00:00:00', 'S'),
	(91, '041', 'LIVRAMENTO', NULL, NULL, '2021-05-13 16:39:03', '0000-00-00 00:00:00', 'S'),
	(92, '041', 'NOVO HORIZONTE', NULL, NULL, '2021-05-13 16:39:03', '0000-00-00 00:00:00', 'S'),
	(93, '041', 'PARQUE IDEAL', NULL, NULL, '2021-05-13 16:39:03', '0000-00-00 00:00:00', 'S'),
	(94, '041', 'PARQUE POTI', NULL, NULL, '2021-05-13 16:39:03', '0000-00-00 00:00:00', 'S'),
	(95, '041', 'REDONDA', NULL, NULL, '2021-05-13 16:39:03', '0000-00-00 00:00:00', 'S'),
	(96, '041', 'RENASCENÇA', NULL, NULL, '2021-05-13 16:39:03', '0000-00-00 00:00:00', 'S'),
	(97, '041', 'SÃO RAIMUNDO', NULL, NULL, '2021-05-13 16:39:03', '0000-00-00 00:00:00', 'S'),
	(98, '041', 'SÃO SEBASTIÃO', NULL, NULL, '2021-05-13 16:39:04', '0000-00-00 00:00:00', 'S'),
	(99, '041', 'TANCREDO NEVES', NULL, NULL, '2021-05-13 16:39:04', '0000-00-00 00:00:00', 'S'),
	(100, '041', 'TODOS OS SANTOS', NULL, NULL, '2021-05-13 16:39:04', '0000-00-00 00:00:00', 'S'),
	(101, '041', 'VERDECAP', NULL, NULL, '2021-05-13 16:39:04', '0000-00-00 00:00:00', 'S'),
	(102, '002', 'ÁGUA MINERAL', NULL, NULL, '2021-05-13 16:39:04', '0000-00-00 00:00:00', 'S'),
	(103, '002', 'ALEGRE', NULL, NULL, '2021-05-13 16:39:04', '0000-00-00 00:00:00', 'S'),
	(104, '002', 'ALTO ALEGRE', NULL, NULL, '2021-05-13 16:39:04', '0000-00-00 00:00:00', 'S'),
	(105, '002', 'AROEIRAS', NULL, NULL, '2021-05-13 16:39:04', '0000-00-00 00:00:00', 'S'),
	(106, '002', 'BOM JESUS', NULL, NULL, '2021-05-13 16:39:04', '0000-00-00 00:00:00', 'S'),
	(107, '002', 'BUENOS AIRES', NULL, NULL, '2021-05-13 16:39:04', '0000-00-00 00:00:00', 'S'),
	(108, '002', 'CHAPADINHA', NULL, NULL, '2021-05-13 16:39:04', '0000-00-00 00:00:00', 'S'),
	(109, '002', 'EMBRAPA', NULL, NULL, '2021-05-13 16:39:04', '0000-00-00 00:00:00', 'S'),
	(110, '002', 'ITAPERU', NULL, NULL, '2021-05-13 16:39:04', '0000-00-00 00:00:00', 'S'),
	(111, '002', 'JACINTA ANDRADE', NULL, NULL, '2021-05-13 16:39:04', '0000-00-00 00:00:00', 'S'),
	(112, '002', 'MAFRENSE', NULL, NULL, '2021-05-13 16:39:04', '0000-00-00 00:00:00', 'S'),
	(113, '002', 'MEMORARE', NULL, NULL, '2021-05-13 16:39:04', '0000-00-00 00:00:00', 'S'),
	(114, '002', 'MOCAMBINHO', NULL, NULL, '2021-05-13 16:39:04', '0000-00-00 00:00:00', 'S'),
	(115, '002', 'MONTE VERDE', NULL, NULL, '2021-05-13 16:39:04', '0000-00-00 00:00:00', 'S'),
	(116, '002', 'OLARIAS', NULL, NULL, '2021-05-13 16:39:04', '0000-00-00 00:00:00', 'S'),
	(117, '002', 'PARQUE BRASIL', NULL, NULL, '2021-05-13 16:39:04', '0000-00-00 00:00:00', 'S'),
	(118, '002', 'POTI VELHO', NULL, NULL, '2021-05-13 16:39:04', '0000-00-00 00:00:00', 'S'),
	(119, '002', 'REAL COPAGRE', NULL, NULL, '2021-05-13 16:39:04', '0000-00-00 00:00:00', 'S'),
	(120, '002', 'SANTA MARIA', NULL, NULL, '2021-05-13 16:39:05', '0000-00-00 00:00:00', 'S'),
	(121, '002', 'SANTA ROSA', NULL, NULL, '2021-05-13 16:39:05', '0000-00-00 00:00:00', 'S'),
	(122, '002', 'VILA SÃO FRANCISCO', NULL, NULL, '2021-05-13 16:39:05', '0000-00-00 00:00:00', 'S');
/*!40000 ALTER TABLE `orcamento_participativo_bairro` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;