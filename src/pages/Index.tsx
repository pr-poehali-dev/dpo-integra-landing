import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Здесь можно добавить логику отправки формы
  };

  const courses = [
    {
      id: 1,
      title: 'Управление проектами',
      description: 'Изучите современные методы управления проектами, включая Agile и Scrum подходы',
      duration: '72 часа',
      format: 'Очно/онлайн',
      price: '25 000 ₽',
      icon: 'Target'
    },
    {
      id: 2,
      title: 'Цифровой маркетинг',
      description: 'Освойте инструменты интернет-маркетинга, SMM, контекстную рекламу и аналитику',
      duration: '96 часов',
      format: 'Онлайн',
      price: '35 000 ₽',
      icon: 'TrendingUp'
    },
    {
      id: 3,
      title: 'Финансовая аналитика',
      description: 'Научитесь анализировать финансовые показатели и принимать обоснованные решения',
      duration: '64 часа',
      format: 'Очно',
      price: '30 000 ₽',
      icon: 'BarChart3'
    },
    {
      id: 4,
      title: 'HR-менеджмент',
      description: 'Развитие навыков управления персоналом и построения эффективной команды',
      duration: '80 часов',
      format: 'Очно/онлайн',
      price: '28 000 ₽',
      icon: 'Users'
    },
    {
      id: 5,
      title: 'Бизнес-аналитика',
      description: 'Изучение методов анализа бизнес-процессов и оптимизации деятельности компании',
      duration: '88 часов',
      format: 'Онлайн',
      price: '32 000 ₽',
      icon: 'LineChart'
    },
    {
      id: 6,
      title: 'Лидерство и управление',
      description: 'Развитие лидерских качеств и навыков эффективного управления командой',
      duration: '60 часов',
      format: 'Очно',
      price: '27 000 ₽',
      icon: 'Crown'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Icon name="GraduationCap" size={32} className="text-primary" />
              <h1 className="text-2xl font-montserrat font-bold text-gray-900">
                Центр ДПО <span className="text-primary">Интегра</span>
              </h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors font-open-sans">О центре</a>
              <a href="#courses" className="text-gray-700 hover:text-primary transition-colors font-open-sans">Курсы</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors font-open-sans">Контакты</a>
            </div>
            <Button className="hidden md:block">
              Записаться на курс
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-orange-500 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-montserrat font-bold mb-6 leading-tight">
                Развивайте
                <span className="block text-yellow-300">карьеру</span>
                с нами
              </h2>
              <p className="text-xl font-open-sans mb-8 text-blue-100">
                Центр дополнительного профессионального образования "Интегра" — 
                ваш надежный партнер в профессиональном развитии и карьерном росте.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-montserrat font-semibold">
                  <Icon name="BookOpen" size={20} className="mr-2" />
                  Выбрать курс
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-montserrat">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Консультация
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="/img/d7a031cc-3aa4-4d83-93f1-78a248c3448f.jpg" 
                alt="Профессиональное образование" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-4xl font-montserrat font-bold text-gray-900 mb-4">
              Почему выбирают нас?
            </h3>
            <p className="text-xl text-gray-600 font-open-sans max-w-3xl mx-auto">
              Мы предлагаем качественное образование с практическим подходом, 
              которое поможет вам достичь новых высот в карьере.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-montserrat font-semibold mb-3 text-gray-900">Лицензированные программы</h4>
              <p className="text-gray-600 font-open-sans">Все наши курсы имеют государственную лицензию и соответствуют современным стандартам образования.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-montserrat font-semibold mb-3 text-gray-900">Опытные преподаватели</h4>
              <p className="text-gray-600 font-open-sans">Наши эксперты — практики с многолетним опытом работы в ведущих компаниях отрасли.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="TrendingUp" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-montserrat font-semibold mb-3 text-gray-900">Практический подход</h4>
              <p className="text-gray-600 font-open-sans">Обучение на реальных кейсах и проектах, которые сразу можно применить в работе.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-4xl font-montserrat font-bold text-gray-900 mb-4">
              Наши курсы
            </h3>
            <p className="text-xl text-gray-600 font-open-sans max-w-3xl mx-auto">
              Выберите программу, которая поможет вам достичь профессиональных целей
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card key={course.id} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={course.icon as any} size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-xl font-montserrat font-semibold text-gray-900">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 font-open-sans">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Icon name="Clock" size={16} className="mr-2 text-blue-500" />
                      <span className="font-open-sans">{course.duration}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Icon name="Monitor" size={16} className="mr-2 text-blue-500" />
                      <span className="font-open-sans">{course.format}</span>
                    </div>
                    <div className="flex items-center text-sm font-semibold text-gray-900">
                      <Icon name="Ruble" size={16} className="mr-2 text-green-500" />
                      <span className="font-montserrat">{course.price}</span>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    Подробнее о курсе
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h3 className="text-4xl font-montserrat font-bold text-gray-900 mb-4">
                Свяжитесь с нами
              </h3>
              <p className="text-xl text-gray-600 font-open-sans">
                Оставьте заявку, и мы поможем выбрать подходящую программу обучения
              </p>
            </div>
            
            <Card className="shadow-2xl border-0 animate-scale-in">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-montserrat font-medium">Ваше имя *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Введите ваше имя"
                        required
                        className="font-open-sans"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-montserrat font-medium">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                        className="font-open-sans"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-montserrat font-medium">Телефон</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+7 (999) 123-45-67"
                      className="font-open-sans"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-montserrat font-medium">Сообщение</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Расскажите о ваших целях обучения..."
                      rows={4}
                      className="font-open-sans"
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full font-montserrat font-semibold">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="GraduationCap" size={32} className="text-blue-400" />
                <h4 className="text-xl font-montserrat font-bold">Центр ДПО Интегра</h4>
              </div>
              <p className="text-gray-400 font-open-sans">
                Ваш надежный партнер в профессиональном развитии и карьерном росте.
              </p>
            </div>
            
            <div>
              <h5 className="text-lg font-montserrat font-semibold mb-4">Контакты</h5>
              <div className="space-y-2 text-gray-400 font-open-sans">
                <div className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  <span>info@integra-dpo.ru</span>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  <span>г. Москва, ул. Примерная, д. 123</span>
                </div>
              </div>
            </div>
            
            <div>
              <h5 className="text-lg font-montserrat font-semibold mb-4">Социальные сети</h5>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                  <Icon name="Twitter" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
                  <Icon name="Linkedin" size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 font-open-sans">
              © 2024 Центр ДПО Интегра. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}