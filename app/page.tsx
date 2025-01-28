import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, Phone, ArrowDown } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import calculadoraPrint from "@/src/imgs/calculadoraPrint.jpg"
import climaPrint from "@/src/imgs/climaPrint.png"
import todoapp from "@/src/imgs/todoapp.png"



export default function Home() {
  return (
    <div className="p-3 min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="py-6">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Lucas Rawlison</h1>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <a href="#sobre">Sobre</a>
            </Button>
            <Button variant="ghost" asChild>
              <a href="#projetos">Projetos</a>
            </Button>
            <Button variant="ghost" asChild>
              <a href="#contato">Contato</a>
            </Button>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto">
          <Image
            src="https://github.com/lucasrawlison.png"
            alt="Lucas Rawlison"
            width={200}
            height={200}
            className="rounded-full mx-auto mb-8"
          />
          <h2 className="text-4xl font-bold mb-4">
            Olá, eu sou Lucas Rawlison
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Desenvolvedor de Software
          </p>
          <Button className="h-auto w-[200px]" asChild>
            <a href="#contato" className="flex flex-col">
              <span>Entre em contato</span>
            </a>
          </Button>
          <div className="mt-4 w-full flex items-center justify-center">
            <ArrowDown className=" animate-bounce" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Sobre Mim</h2>
          <p className="text-lg text-center max-w-2xl mx-auto">
            Um entusiasta de tecnologia em uma jornada como desenvolvedor de
            software. Com interesse em linguagens como HTML, JavaScript e PHP,
            além de ferramentas como React, Next.js e SQL, me dedico a aprender
            e dominar práticas modernas de desenvolvimento. Apaixonado por
            resolver problemas e criar soluções criativas. O limite do homem é a
            sua capacidade de inovar.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Meus Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Projeto 1 */}
            <Card className="group hover:scale-105 transition-transform">
              <div className="w-full h-[200px] relative overflow-hidden items-center">
                <Image
                  src={calculadoraPrint}
                  alt="Imagem do Projeto 1"
                  width={400}
                  height={200}
                  className="group-hover:blur-sm transition-all duration-300 w-full h-full object-cover z-0 absolute"
                />
                <div className=" absolute bg-black h-full w-full z-10 opacity-35"></div>
              </div>
              <CardHeader>
                <CardTitle>Calculadora em Next.js</CardTitle>
                <CardDescription>
                  Este é um projeto de uma calculadora simples construída
                  utilizando React e Next.js. A interface do usuário é composta
                  por componentes fornecidos por uma biblioteca externa.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">JavaScript, TypeSript, CSS, Next.js</p>
                <div className="w-full flex justify-between items-end h-24">
                  <Button variant="secondary" asChild>
                    <a
                      href="https://github.com/lucasrawlison/next-calculator"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver no GitHub
                    </a>
                  </Button>
                  <Button asChild>
                    <a
                      href="https://next-calculator-mauve.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Acessar Projeto
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
            {/* Projeto 2 */}
            <Card className="group hover:scale-105 transition-transform">
              <div className="w-full h-[200px] relative">
                <Image
                  src={climaPrint}
                  alt="Imagem do Projeto 1"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover z-0 absolute"
                />
                <div className="group-hover:blur-sm transition-all duration-300 absolute bg-black h-full w-full z-10 opacity-35"></div>
              </div>
              <CardHeader>
                <CardTitle>
                  Consultor de Clima OpenWeather em HTML, JS e PHP
                </CardTitle>
                <CardDescription>
                  Este é um projeto que demonstra a capacidade de mostrar
                  informações climáticas com base na localização atual do
                  usuário. Ele utiliza a função de geolocalização do navegador
                  para obter as coordenadas geográficas do usuário e, em
                  seguida, faz uma solicitação fetch para a API OpenWeather para
                  obter dados climáticos atualizados.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">JavaScript, TypeSript, CSS, Next.js</p>
                <div className="w-full flex justify-between">
                  <Button variant="secondary" asChild>
                    <a
                      href="https://github.com/lucasrawlison/Consultor-de-clima/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver no GitHub
                    </a>
                  </Button>
                  <Button asChild>
                    <a
                      href="https://lucasrawlison.github.io/Consultor-de-clima/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Acessar Projeto
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
            {/* Projeto 3 */}
            <Card className=" hover:scale-105 transition-transform">
              <div className="w-full h-[200px] relative">
                <Image
                  src={todoapp}
                  alt="Imagem do Projeto 1"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover z-0 absolute"
                />
                <div className=" absolute bg-black h-full w-full z-10 opacity-35"></div>
              </div>
              <CardHeader>
                <CardTitle>Gerenciador de Tarefas</CardTitle>
                <CardDescription>
                  Projeto destinado a criar um gerenciador de tarefas pessoais.
                  Com a finalidade de organizar todo o tempo profissional e
                  pessoal em um só lugar.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">JavaScript, TypeSript, CSS, Next.js</p>
                <div className="w-full flex justify-between items-end h-24">
                  <Button variant="secondary" asChild>
                    <a
                      href="https://github.com/lucasrawlison/login/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver no GitHub
                    </a>
                  </Button>
                  <Button asChild>
                    <a
                      href="https://login-two-mocha.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Acessar Projeto
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-muted">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Entre em Contato</h2>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://github.com/seu-usuario"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a
                href="http://linkedin.com/in/lucasrawlison"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="mailto:luc1497@gmail.com">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a target="_blank" href="http://wa.me/5583987872668">
                <Phone className="h-6 w-6" />
                <span className="sr-only">Telefone</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center">
        <p>&copy; 2025 Lucas Rawlison. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

