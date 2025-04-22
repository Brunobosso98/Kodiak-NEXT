"use client";

import { useState } from "react";

type EtapaKey =
  | "tela-inicial"
  | "login"
  | "dashboard"
  | "rotas"
  | "otimiza"
  | "check"
  | "partida"
  | "finaliza"
  | "templates"
  | "locais"
  | "usuarios"
  | "distancia"
  | "concluidas"
  | "estatisticas"
  | "faq";

interface EtapaConteudo {
  titulo: string;
  descricao: string;
  imagens: string[];
  videos: string[];
  legendasImagens?: string[];
  legendasVideos?: string[];
}

const etapas: { key: EtapaKey; label: string }[] = [
  { key: "tela-inicial", label: "Tela inicial" },
  { key: "login", label: "Tela de login/registro" },
  { key: "dashboard", label: "Dashboard e perfil" },
  { key: "rotas", label: "Criação de Rotas" },
  { key: "otimiza", label: "Otimização de Rotas" },
  { key: "partida", label: "Ponto de Partida" },
  { key: "check", label: "Check-in e Check-out" },
  { key: "finaliza", label: "Finalização de Rotas" },
  { key: "templates", label: "Página de templates" },
  { key: "locais", label: "Página de locais" },
  { key: "usuarios", label: "Gerenciamento de usuários" },
  { key: "distancia", label: "Config. de distância máxima" },
  { key: "concluidas", label: "Rotas concluídas" },
  { key: "estatisticas", label: "Estatísticas dos vendedores" },
  { key: "faq", label: "FAQ" },
];

type FAQItem = { pergunta: string; resposta: string };

const faq: FAQItem[] = [
  {
    pergunta: "Como o sistema otimiza as rotas dos vendedores/entregadores?",
    resposta: "O sistema utiliza algoritmos avançados de otimização (Google OR-Tools e OSRM) para calcular as rotas mais eficientes, considerando o trânsito, a malha viária e as restrições operacionais. Isso reduz custos com combustível e aumenta o número de visitas diárias.",
  },
  {
    pergunta: "É possível planejar rotas para vários vendedores ao mesmo tempo?",
    resposta: "Sim. O sistema permite a criação e atribuição de múltiplas rotas simultaneamente, facilitando o planejamento para equipes grandes e otimizando o tempo de cada vendedor ou entregador.",
  },
  {
    pergunta: "Como funciona o check-in e check-out nos pontos de visita?",
    resposta: "O check-in/check-out é feito pelo aplicativo mobile, utilizando a localização GPS do dispositivo. O sistema valida se o usuário está realmente próximo ao local antes de permitir o registro, garantindo precisão nas informações.",
  },
  {
    pergunta: "O que acontece se o vendedor estiver sem internet durante a rota?",
    resposta: "O aplicativo mobile possui modo offline. Os dados da rota ficam armazenados localmente e são sincronizados automaticamente assim que a conexão for restabelecida.",
  },
  {
    pergunta: "Como importar uma lista de locais para o sistema?",
    resposta: "A importação pode ser feita via arquivo Excel, seguindo o modelo disponível na interface web. Isso agiliza o cadastro de grandes volumes de endereços.",
  },
  {
    pergunta: "O sistema oferece dashboards de acompanhamento?",
    resposta: "Sim. Gestores e administradores têm acesso a dashboards analíticos com métricas de desempenho, rotas concluídas, produtividade dos vendedores e estatísticas em tempo real.",
  },
  {
    pergunta: "Como funciona a hierarquia de usuários no sistema?",
    resposta: "Existem três níveis principais: Administrador (acesso total), Gerente (acesso aos vendedores sob sua gestão) e Vendedor (acesso apenas às suas rotas e estatísticas). O administrador gerencia o cadastro e permissões dos demais usuários.",
  },
  {
    pergunta: "O sistema suporta múltiplas empresas?",
    resposta: "Sim. O sistema foi projetado para multitenancy, permitindo que diferentes empresas utilizem a plataforma de forma isolada e segura.",
  },
  {
    pergunta: "Como o sistema garante a precisão da localização no check-in?",
    resposta: "O aplicativo utiliza múltiplas leituras de GPS e algoritmos adaptativos para validar a proximidade do usuário ao local, aumentando a precisão e evitando registros indevidos.",
  },
  {
    pergunta: "Quais são os principais benefícios observados após a implantação?",
    resposta: "Entre os principais resultados estão: redução de 20-30% nos custos com combustível, aumento de 25% na produtividade das equipes, planejamento de rotas em minutos e maior satisfação dos clientes finais.",
  },
  {
    pergunta: "O que acontece após finalizar uma rota?",
    resposta: "A rota é movida para a seção de 'Rotas Concluídas', onde é possível visualizar estatísticas detalhadas e salvar a rota como template para uso futuro.",
  },
  {
    pergunta: "O sistema é seguro?",
    resposta: "Sim. Utilizamos autenticação JWT, controle de permissões por perfil, e todas as comunicações são protegidas. Cada empresa tem seus dados isolados dos demais clientes.",
  },
];

const conteudo: Record<EtapaKey, EtapaConteudo> = {
  "tela-inicial": {
    titulo: "Tela inicial",
    descricao: "Apresentação da tela inicial do sistema. A página contém informações sobre o sistema e botões para acessar o login/registro.",
    imagens: ["/rota/paginaInicial.avif"],
    videos: [],
    legendasImagens: ["Imagem da tela inicial"],
  },
  login: {
    titulo: "Tela de login/registro",
    descricao: "Como acessar ou criar uma conta. Usuários registrados terão acesso ADMIN da empresa e um período gratuito de 7 dias.",
    imagens: ["/rota/login.avif", "/rota/registro.avif"],
    videos: [],
    legendasImagens: ["Página de login. Entrar com suas credenciais", "Página de registro. Criar uma conta com seu email, CNPJ e nome da Empresa. (A conta criada será o ADMIN do sistema)."],
  },
  dashboard: {
    titulo: "Dashboard e configurações de perfil",
    descricao: "Página de dashboard e configurações de perfil. ",
    imagens: ["/rota/dashboard.avif", "/rota/dashboard1.avif", "/rota/configUser.avif", "/rota/dashboard2.avif"],
    videos: [],
    legendasImagens: ["A página conta com informações de rotas ativas, rotas concluídas, locais cadastrados, locais visitados e informações usuários cadastrados.", "Ao clicar em seu usuário, será possível editar as informações do perfil ou sair da conta.", "Página para configurações do usuário, podendo alterar nome, email e senha.", "Exemplo de dashboard com informações."],
  },
  rotas: {
    titulo: "Página de rotas/criação/ponto de partida/otimização/finalização",
    descricao: "Guia completo sobre a criação, otimização e finalização de rotas. Use imagens e vídeos para ilustrar.",
    imagens: ["/rota/rotas.avif", "/rota/criarRota.avif", "/rota/criarRota2.avif", "/rota/rotas2.avif", "/rota/rotaCriada.avif"],
    videos: ["Em breve: 4 vídeos serão adicionados aqui."],
    legendasImagens: [
      "Visão geral da página Rotas",
      "Página para criar rotas, campos obrigatórios são Nome, Descrição, Ponto de Partida (locais já cadastrados, pode ser alterado posteriomente). Passos 4 e 5 são filtros para selecionar os pontos da rota.",
      "Página para criar rotas, primeira campo mostrará os locais cadastrados com base nos filtros, para selecionar mais de uma segure a tecla 'CTRL', ou clique e arraste. Campo para atribuir Vendedores e Gerentes (se o usuário for o ADMIN).",
      "Tela principal da rota. Contendo informações de criação, otimização, vendedores atribuidos, progresso, mapa e lista de endereços. Ícone do mapa: verde com desenho (ponto de partida), amarelo (próximo ponto) e vermelho (demais pontos)",
      "Exemplo da página de Rotas, com rota criada.",
    ],
    legendasVideos: [
      "Descrição do vídeo 1 (edite aqui depois)",
      "Descrição do vídeo 2 (edite aqui depois)",
      "Descrição do vídeo 3 (edite aqui depois)",
      "Descrição do vídeo 4 (edite aqui depois)",
    ],
  },
  templates: {
    titulo: "Página de templates",
    descricao: "Como criar, editar e usar templates de rotas.",
    imagens: ["/rota/rotaTemplate.avif", "/rota/rotaTemplate5.avif", "/rota/rotaTemplate6.avif", "/rota/rotaTemplate2.avif", "/rota/rotaTemplate3.avif", "/rota/rotaTemplate4.avif"],
    videos: ["Em breve: 1 vídeo será adicionado aqui."],
    legendasImagens: [
      "O template de rota pode ser criado pela página de Rotas clicando no botão demarcado.",
      "Também pode ser criado a partir de uma rota já concluída, pela página de Rotas Concluídas.",
      "Para acessar a página de templates, basta clicar no botão demarcado dentro da página de Rotas.",
      "Os templates apareceram aqui, e terão as opções de Visualizar Detalhes, Excuir e Criar Nova Rota.",
      "O modal para criação de rota a partir de template, contará com campo obrigatório de Nome, possibilidade de adicionar um local (pontos cadastrados) e excluir um ponto da rota.",
      "Após a criação, a rota aparecerá normalmente na página de rotas e o template continuará salvo.",
    ],
    legendasVideos: ["Descrição do vídeo (edite aqui depois)"],
  },
  locais: {
    titulo: "Página de locais",
    descricao: "Adicionar, importar, excluir locais, ver no Google Maps e usar exemplo de Excel.",
    imagens: ["/rota/locais2.avif", "/rota/importarLocais.avif", "/rota/excelExemplo.avif", "/rota/locais.avif", "/rota/locais5.avif", "/rota/locais3.avif", "/rota/locais4.avif"],
    videos: ["Em breve: 1 vídeo será adicionado aqui."],
    legendasImagens: [
      "Locais podem ser importados diretamente por um arquivo Excel, clicando no botão demarcado.",
      "O modal para importação conta com um botão para escolher o arquivo Excel e um botão para importar.",
      "O arquivo Excel deve conter as colunas 'latitude', 'longitude', 'nome', 'cidade' e 'estado', colunas de 'rua', 'numero' e 'telefone são opcionais.",
      "Também é possível adicionar um Local manualemte, clicando no botão demarcado.",
      "Para cadastrar um novo Local, preencha o modal com as informações necessárias. Campos de 'Rua', 'Numero' e 'Telefone' são opcionais.",
      "Após adicionar com sucesso o local, ele será exibido automaticamente na lista de locais.",
      "O botão demarcado leva o usuário para o Google Maps, com o local selecionado.",
    ],
    legendasVideos: ["Descrição do vídeo (edite aqui depois)"],
  },
  usuarios: {
    titulo: "Gerenciamento de usuários",
    descricao: "Como adicionar, editar ou atribuir Gerentes/Vendedores.",
    imagens: ["/rota/gerenciarUser.avif", "/rota/gerenciarUser3.avif", "/rota/cadastrarUser.avif", "/rota/gerenciaruser2.avif", "/rota/visaoGerente.avif", "/rota/gerente.avif", "/rota/visaoGerente2.avif", "/rota/gerencia.avif", "/rota/gerencia2.avif", "/rota/gerencia3.avif"],
    videos: ["Em breve: 3 vídeos serão adicionados aqui."],
    legendasImagens: [
      "Página principal de Gerenciamento de Usuários",
      "O cadastro de novos usuários é feito clicando no botão demarcado.",
      "A página para cadastro de novos usuários contém campos obrigatórios de nome, email, função (gerente ou vendedor) e senha.",
      "Pós criação de Gerente, a página ficará assim. Administradores tem a opção de atribuir Gerentes e Vendedores e excluir contas. O Gerente terá acesso apenas aos Vendedores atribuidos a ele.",
      "Visão da página de Gerenciar Usuários, logado como Gerente (sem opção de excluir e atribuir Vendedor a outro Gerente).",
      "Gerentes tem permissão de criar um novo Vendedor, que será automaticamente atribuido a ele. Administradores conseguem visualizar tudo posteriomente.",
      "Visão da página de Gerenciar Usuários, pós criação de Vendedor.",
      "Administradores conseguem atribuir um Vendedor a um Gerente e vice-versa, clicando em um dos botões demarcados.",
      "O modal para atribuição de Vendedor a Gerente, contém a opção de Excluir Usuário, atribuir ou desvincular.",
      "Exemplo de como é o modal pós atribuição de Vendedor a Gerente.",
    ],
    legendasVideos: ["Descrição do vídeo 1 (edite aqui depois)", "Descrição do vídeo 2 (edite aqui depois)", "Descrição do vídeo 3 (edite aqui depois)"],
  },
  distancia: {
    titulo: "Configurações de distância máxima",
    descricao: "Configuração exclusiva do administrador para definir a distância máxima permitida nas rotas.",
    imagens: ["/rota/configDistancia.avif"],
    videos: ["Em breve: 1 vídeo será adicionado aqui."],
    legendasImagens: ["Nessa página podemos mudar a distância máxima permitida nas rotas. O valor padrão é 100 km."],
    legendasVideos: ["Descrição do vídeo (edite aqui depois)"],
  },
  concluidas: {
    titulo: "Página de rotas concluídas",
    descricao: "Visualize rotas já finalizadas e suas estatísticas.",
    imagens: ["/rota/rotasConcluidas.avif", "/rota/rotasConcluidas2.avif", "/rota/rotasConcluidas3.avif"],
    videos: [],
    legendasImagens: [
      "Exemplo de página de Rotas Concluídas.",
      "Página com 1 rota concluída. Temos 3 opções, ver os detalhes da rota, ver as estatísticas e salvar como um template.",
      "As estáticas mostram, o tempo médio de trabalho (check-out - check-in), o tempo médio de deslocamento (check-in - check-out), os tempos totais e uma lista com os pontos visitados da rota.",
    ],
  },
  estatisticas: {
    titulo: "Estatísticas dos Vendedores",
    descricao: "Acompanhe o desempenho dos vendedores através das estatísticas apresentadas.",
    imagens: ["/rota/Estatisticas Vendedores.avif", "/rota/estatisticas Vendedores2.avif"],
    videos: [],
    legendasImagens: ["Exemplo da página na visão de um Gerente, com apenas um Vendedor atríbuido. Gerentes tem acesso aos dados de seus Vendedores e Vendedores tem acesso apenas a seus dados.", "Página com as informações e estatísticas de um Vendedor."],
  },
  otimiza: {
    titulo: "Visualização e Otimização de Rotas",
    descricao: "Acompanhe os detalhes da rota e otimize-a.",
    imagens: ["/rota/rotas3.avif", "/rota/otimizarRota3.avif", "/rota/rotaOtimizada2.avif", "/rota/rotaOtimizada.avif", "/rota/rotaOtimizada3.avif", "/rota/rotaOtimizada4.avif", "/rota/rotaOtimizada5.avif"],
    videos: [],
    legendasImagens: [
      "A otimização da rota pode ser feita clicando no botão 'Otimizar Rota', ou pelo botão de 'Alterar Ponto de Partida'.",
      "No modal de Otimizar Rota, você tem a opção de selecionar a check-box de Rota Circular, otimizar a rota com essa opção marcada, otimizara a rota com base no ponto de partida (rota circular).",
      "Ao inicar a Otimização de Rota, o seu botão ficará indisponível até o fim da otimização. A reordenação dos pontos para o menor caminho será feita automaticamente e demora certa de 2 minutos.",
      "Exemplo de como ficará a página de Rotas, com rota em otimização.",
      "Os pontos antes da otimização ficaram na ordem original e não levando em consideração ruas e estradas.",
      "Exemplo de como a página ficará pós otimização.",
      "Após a otimização, os pontos da rota serão reorganizados e o mapa será atualizado.",
    ],
  },
  partida: {
    titulo: "Alterar ou Otimizar Rota pelo Ponto de Partida",
    descricao: "Altere o Ponto de Partida com sua localização atual ou coloque uma coordenada.",
    imagens: ["/rota/rotas4.avif", "/rota/pontoPartida2.avif", "/rota/pontoPartida.avif"],
    videos: [],
    legendasImagens: [
      "Você pode alterar o Ponto de Partida, clicão no botão demarcado, nos detalhes da rota.",
      "É possível alterar o Ponto de Partida com sua localização atual, recebido do navegador. Também temos 2 check-boxs, que permitem iniciar a Otimização, e Otimizar retornando ao Ponto de Partida.",
      "Também é possível alterar o Ponto de Partida informando coordenadas manualmente.",
    ],
  },
  check: {
    titulo: "Sistema de Check-in e Check-out",
    descricao: "Marque pontos de check-in e check-out com base em sua localização atual. E levando em consideração a distância máxima permitida.",
    imagens: ["/rota/check.avif", "/rota/erroCheckin.avif", "/rota/checkin.avif", "/rota/check1.avif", "/rota/check2.avif"],
    videos: [],
    legendasImagens: [
      "Para marcar o check-in, clique no botão demarcado, nos detalhes da rota.",
      "Caso o usuário esteja em uma distância maior que a permitida, o check-in não será feito. E informará sua distância.",
      "Caso o usuário esteja em uma distância menor que a permitida, o check-in será feito. Uma notificação de sucesso será exibida e o botão de Check-out será ativado.",
      "Para marcar o check-out, clique no botão demarcado, nos detalhes da rota. Levando em consideração a distância máxima permitida.",
      "Após marcar com sucesso o check-in e o check-out, o ponto será marcado como Visitado e informações sobre data, horário e tempo de trabalho serão exibidas.",
    ],
  },
  finaliza: {
    titulo: "Finalizar uma Rota",
    descricao: "Finalize uma rota quando e onde quiser. A rota será enviada a página de Rotas Concluídas e informações sobre data, horário e tempo de trabalho serão exibidas.",
    imagens: ["/rota/finaliza.avif", "/rota/finaliza1.avif"],
    videos: [],
    legendasImagens: ["Para finalizar uma rota, basta clicar no botão demarcado, nos detalhes da rota.", "O modal de finalização conta com uma check-box de confirmação para finalização e um botão para executar a açaõ."],
  },
  faq: {
    titulo: "Perguntas Frequentes (FAQ)",
    descricao: "Tire suas dúvidas sobre o sistema de otimização de rotas.",
    imagens: [],
    videos: [],
    legendasImagens: [],
  },
};

export default function AjudaPage() {
  const [etapaSelecionada, setEtapaSelecionada] = useState<EtapaKey>("tela-inicial");
  const etapa = conteudo[etapaSelecionada];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Menu lateral moderno */}
      <aside className="w-72 bg-white border-r border-gray-200 p-6 hidden md:flex flex-col shadow-md">
        <h2 className="text-2xl font-extrabold mb-8 text-blue-700 tracking-tight">Guia do Usuário</h2>
        <nav className="flex-1">
          <ul>
            {etapas.map((item) => (
              <li key={item.key}>
                <button
                  className={`w-full text-left px-4 py-3 rounded-lg mb-2 transition-colors font-semibold text-lg shadow-sm ${
                    etapaSelecionada === item.key
                      ? "bg-blue-600 text-white ring-2 ring-blue-400"
                      : "hover:bg-blue-100 text-gray-800"
                  }`}
                  onClick={() => setEtapaSelecionada(item.key)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      {/* Conteúdo principal */}
      <main className="flex-1 p-6 flex flex-col items-center">
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-10 mt-8 border border-blue-100">
          <h1 className="text-3xl font-extrabold text-blue-700 mb-3 flex items-center gap-2">
            {etapa.titulo}
          </h1>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed border-l-4 border-blue-200 pl-4 bg-blue-50 py-2">
            {etapa.descricao}
          </p>

          {/* FAQ Accordion */}
          {etapaSelecionada === "faq" && (
            <section className="mt-6">
              <div className="flex flex-col gap-4">
                {faq.map((item, idx) => (
                  <details key={idx} className="bg-blue-50 rounded-lg border-l-4 border-blue-400 p-4 group">
                    <summary className="cursor-pointer font-semibold text-blue-800 text-lg group-open:text-blue-600 transition-colors">
                      {item.pergunta}
                    </summary>
                    <div className="mt-2 text-gray-700 text-base pl-2">
                      {item.resposta}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          )}

          {/* Imagens */}
          {etapa.imagens && etapa.imagens.length > 0 && (
            <div className="mb-8 flex flex-col gap-8">
              {etapa.imagens.map((src, idx) => (
                <figure key={idx} className="flex flex-col items-center">
                  <img
                    src={src}
                    alt={`${etapa.titulo} exemplo ${idx + 1}`}
                    className="rounded-xl border shadow max-w-full"
                    loading="lazy"
                  />
                  <figcaption className="mt-2 text-sm text-gray-500">
                    {etapa.legendasImagens && etapa.legendasImagens[idx] ? etapa.legendasImagens[idx] : "Descrição da imagem (edite aqui depois)"}
                  </figcaption>
                </figure>
              ))}
            </div>
          )}
          {/* Vídeos (placeholders) */}
          {etapa.videos && etapa.videos.length > 0 && (
            <div className="mb-8 flex flex-col gap-4">
              {etapa.videos.map((video, idx) => (
                <div key={idx} className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded mb-2">
                  {video}
                  <div className="mt-2 text-sm text-gray-500">
                    {etapa.legendasVideos && etapa.legendasVideos[idx] ? etapa.legendasVideos[idx] : "Descrição do vídeo/gif (edite aqui depois)"}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
