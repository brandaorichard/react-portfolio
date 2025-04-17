import React from "react";

import project1 from "../assets/images/proj5.png";
import project2 from "../assets/images/proj6.png";

export const About = () => {
  return (
    <section id="about" className="text-white  p-8">
      <h2 className="text-6xl font-bold mb-8">
        Sobre <span className="text-emerald-300">Mim</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="border border-white/20 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-2">Formação e Experiência</h3>
          <p className="text-white/50 mb-6">
            Sou um aventureiro no mundo da programação, sempre em busca de mais
            conhecimento e desafios. Minha formação em Desenvolvimento Web pela
            Trybe foi intensa e completa, com mais de 1.500 horas de conteúdo
            prático e teórico, distribuídas em dezenas de projetos que
            abrangeram tanto o front-end quanto o back-end. No front-end, me
            aprofundei em JavaScript e evoluí do básico ao avançado em React,
            dominando conceitos como componentização, hooks, gerenciamento de
            estado, roteamento, testes e integração com APIs. No back-end,
            comecei com fundamentos sólidos em Docker e bancos de dados
            relacionais e não-relacionais, avançando para a criação de APIs
            RESTful e sistemas CRUD com Node.js e TypeScript. Ao final da
            formação, escolhi uma eletiva em Java com Spring Boot, onde reforcei
            conceitos de arquitetura de software, controle de dependências, JPA,
            autenticação, testes automatizados e construção de aplicações
            robustas e escaláveis. Minha jornada na Trybe foi marcada por
            aprendizado contínuo, colaboração em equipe e entrega constante de
            soluções completas, testadas e bem estruturadas, sempre com foco em
            qualidade de código e boas práticas.
          </p>

          <div className="rounded-lg p-4 mb-4 border border-white/20">
            <code className="text-emerald-300">
              const skills = [<br />
              &nbsp;&nbsp;'JavaScript',
              <br />
              &nbsp;&nbsp;'React',
              <br />
              &nbsp;&nbsp;'Node.js',
              <br />
              &nbsp;&nbsp;'Java',
              <br />
              &nbsp;&nbsp;'SQL',
              <br />
              &nbsp;&nbsp;'Docker'
              <br />
              ];
            </code>
          </div>
        </div>

        <div className="border border-white/20 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-2">Especialidades</h3>
          <p className="text-white/50">
            Minha especialidade é o desenvolvimento web, com foco na criação de
            aplicações completas, escaláveis e com alto padrão de qualidade. Ao
            longo da minha formação, desenvolvi soluções que simulam cenários
            reais, adquirindo experiência em todo o ciclo de desenvolvimento —
            da modelagem até a entrega final. Tenho facilidade em lidar com
            sistemas complexos, sempre priorizando a organização, a clareza do
            código e a eficiência na entrega. Busco constantemente aprimorar
            minhas habilidades para criar produtos que sejam robustos,
            intuitivos e com excelente performance.
          </p>
          <div className="mt-4 relative border border-white/20 rounded-lg p-4 h-[220px] overflow-hidden">
            <img
              src={project1}
              alt="Project 1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="border border-white/20 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-2">Habilidades técnicas:</h3>
          <p className="text-white/50 mb-4">
            Ao longo da minha trajetória, desenvolvi um conjunto sólido de
            habilidades técnicas e interpessoais que me permitem atuar de forma
            eficiente em todas as etapas do desenvolvimento de software. Estou
            em constante evolução, sempre buscando aprender novas ferramentas e
            aperfeiçoar minhas práticas para entregar soluções de qualidade.
          </p>
          <div className="grid grid-cols-1 text-left gap-4">
            <div className="border border-white/20 rounded-lg p-3">
              <h4 className="text-emerald-300 font-medium mb-2"></h4>
              <ul className="list-disc pl-5 text-emerald-300 font-medium mb-2">
                <li>Java</li>
                <li>Spring Stack</li>
                <li>API RESTful</li>
                <li>Postman</li>
                <li>Docker</li>
                <li>MySQL, PostgreSQL, MongoDB</li>
                <li>Maven, Gradle</li>
                <li>Conceitos de Orientação à Objetos</li>
                <li>Versionamento de código usando GIT</li>
                <li>Unity tests, Mockito, Test Container</li>
                <li>React, NextJS</li>
                <li>TailwindCSS</li>
                <li>Conhecimento em Análise de Dados</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="border border-white/20 rounded-lg p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Front-end
              </label>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div
                  className="bg-emerald-300 h-2 rounded-full"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Back-end</label>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div
                  className="bg-emerald-300 h-2 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
          </div>
          <h3 className="text-2xl font-bold mt-4 mb-2">Abordagem</h3>
          <p className="text-white/50">
            Acredito na escrita de código limpo, de fácil manutenção e no uso
            das boas práticas de desenvolvimento. Minha abordagem envolve
            compreender as necessidades do cliente, planejar com cuidado e
            entregar soluções de alta qualidade dentro do prazo.
          </p>
        </div>

        <div className="border border-white/20 rounded-lg p-6 flex flex-col justify-between">
          <div className="relative border border-white/20 rounded-lg p-4 h-[200px] overflow-hidden">
            <img
              src={project2}
              alt="Project 2"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-2">Objetivo</h3>
            <p className="text-white/50">
              Meu objetivo é continuar evoluindo como desenvolvedor, enfrentando
              projetos desafiadores e contribuindo com a comunidade de
              tecnologia. Estou sempre empolgado para aprender novas tecnologias
              e explorar os limites do que é possível no desenvolvimento web.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
