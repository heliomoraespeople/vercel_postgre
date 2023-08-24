import React, { useState } from 'react';
import News from '../news/News';
import Projects from '../projects/Projects';
import Team from '../team/Team';

enum Category {
  News = 'Noticias',
  Projects = 'Projetos',
  Team = 'Equipe'
}

const AdminMenu: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <h1>Painel do Administrador</h1>
      <div className="categories">
        {Object.values(Category).map(category => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={selectedCategory === category ? 'active' : ''}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="content">
        {selectedCategory === Category.News && <News />}
        {selectedCategory === Category.Projects && <Projects />}
        {selectedCategory === Category.Team && <Team />}
      </div>
    </div>
  );
};

export default AdminMenu;
