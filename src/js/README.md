# Реалізація доступу до бази даних

### App.py

    from flask import Flask, request, jsonify
    from flask_sqlalchemy import SQLAlchemy
    
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:SQLpasswd1@localhost/quiz'
    db = SQLAlchemy(app)
    
    class Role(db.Model):
        id = db.Column(db.Integer, primary_key=True)
        name = db.Column(db.String(32), nullable=False)
    
        def __init__(self, id, name):
            self.id = id
            self.name = name
    
    """Маршрут для отримання всіх ролей"""
    @app.route('/roles', methods=['GET'])
    def get_roles():
        roles = Role.query.all()
    
        """Підготовка результату у вигляді JSON"""
        result = [{'id': role.id, 'name': role.name} for role in roles]
        return jsonify(result)
    
    """Маршрут для створення нової ролі"""
    @app.route('/roles', methods=['POST'])
    def create_role():
        data = request.get_json()
        id = data.get('id')
        name = data.get('name')
    
        """Перевірка наявності ідентифікатора та імені у вхідних даних"""
        if not id or not name:
            return jsonify({'error': 'Ідентифікатор та ім`я обов`язкові'}), 400
    
        """Перевірка наявності ролі з вказаним ідентифікатором"""
        existing_role = Role.query.filter_by(id=id).first()
        if existing_role:
            return jsonify({'error': f'Роль з ідентифікатором {id} вже існує'}), 409
    
        """Перевірка наявності ролі з вказаним іменем"""
        existing_role = Role.query.filter_by(name=name).first()
        if existing_role:
            return jsonify({'error': f'Роль з іменем {name} вже існує'}), 409
    
        """Створення нової ролі та збереження у базі даних"""
        new_role = Role(id=id, name=name)
        db.session.add(new_role)
        db.session.commit()
    
        return jsonify({'message': f'Роль з ідентифікатором {id} та іменем {name} створена успішно'}), 201
    
    """Маршрут для оновлення інформації про роль"""
    @app.route('/roles/<int:id>', methods=['PUT'])
    def update_role(id):
        role = Role.query.get(id)
    
        """Перевірка існування ролі з вказаним ідентифікатором"""
        if not role:
            return jsonify({'error': f'Роль з ідентифікатором {id} не знайдена'}), 404
    
        data = request.get_json()
        name = data.get('name')
    
        """Перевірка наявності нового імені у вхідних даних"""
        if not name:
            return jsonify({'error': 'Ім`я обов`язкове'}), 400
    
        """Перевірка наявності ролі з вказаним іменем"""
        existing_role = Role.query.filter(Role.name == name, Role.id != id).first()
        if existing_role:
            return jsonify({'error': f'Роль з іменем {name} вже існує'}), 409
    
        """Оновлення імені ролі та збереження у базі даних"""
        role.name = name
        db.session.commit()
    
        return jsonify({'message': f'Роль з ідентифікатором {id} оновлена успішно, нове ім`я - {name}'})
    
    """Маршрут для видалення ролі"""
    @app.route('/roles/<int:id>', methods=['DELETE'])
    def delete_role(id):
        role = Role.query.get(id)
    
        """Перевірка існування ролі з вказаним ідентифікатором"""
        if not role:
            return jsonify({'error': f'Роль з ідентифікатором {id} не знайдена'}), 404
        role_name = role.name
    
        """Видалення ролі з бази даних"""
        db.session.delete(role)
        db.session.commit()
        return jsonify({'message': f'Роль з ідентифікатором {id} та іменем {role_name} видалена успішно'})
    
    if __name__ == '__main__':
        app.run(debug=True)