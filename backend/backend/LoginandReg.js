const bcrypt = require('bcrypt');

function login(req,res){
    if(req.session.loggedin){
        res.redirect('/');
    }else{
        res.render('login/index');   
    }    
}

function auth(req, res){
    const data = req.body;
    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM users WHERE email = ?',[data.email],(err, userdata) =>{
            if(userdata.length >0){ 

                userdata.forEach(element => {
                    bcrypt.compare(data.password, element.password, (err, isMatch)=>{
                        if(!isMatch){
                            res.render('login/index',{error:'Error: Contraseña incorrecta'})
                        }else{
                            req.session.loggedin = true;
                            req.session.name = element.name;
                            res.redirect('/');
                            console.log('sesion iniciada');
                        }
                    });                    
                });
            }else{
                res.render('login/index',{error:'Error: Usuario no existe'})
            }
        });
    });
}

function register(req,res){
    res.render('login/register');
}

function storeUser(req,res){
    const data=req.body;
    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM users WHERE email = ?',[data.email],(err, userdata) =>{
            if(userdata.length >0){
                res.render('login/register',{error:'Error: Usuario registrado'})
                console.log('Usuario ya creado');
            }else{
                bcrypt.hash(data.password, 12).then(hash=>{
                    data.password =hash;        
                    req.getConnection((err, conn) =>{
                        conn.query('INSERT INTO users SET ?',[data],(err, rows) =>{
                            res.redirect('/login')
                        });
                    });
                });
            }
        })
    })    
}

function logout(req,res){
    if(req.session.loggedin == true){
        req.session.destroy();
    }
    res.redirect('/login');
}

module.exports={
    login,
    register,
    storeUser,
    auth,
    logout,
}