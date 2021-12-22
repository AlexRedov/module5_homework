let student = new Map([
    ['name', 'Иван'],['lastname','Петров'],
    ['age', '22'],['speciality', 'Экономика']
  ]);
  for (let key of student.keys()){
        console.log(`Ключ - ${key}, Значение - ${student.get(key)}`);
  }