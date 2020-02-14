import sqlite3
from flask import Flask, render_template, request, jsonify
import json
app = Flask(__name__)
tablename= 'Mydata'
dbname = 'database/database1.db'
@app.route('/show')
def show_data():
    try:
        with sqlite3.connect(dbname) as con:
            cur = con.cursor()
            cmd = "Select * from " + tablename
            cur.execute(cmd)
            data = cur.fetchall()
            c = '<hr/>'
            for x in data:
                c+=str(x)
                c+='<br/><hr/>'
            c+='<hr/>'
            return c
    except Exception as e:
        return('Unwanted Error Occur<br/>Error is: '+str(e))
@app.route('/drop/<id1>')
def drop_data(id1):
    if id1=='admin':
        try:
            with sqlite3.connect(dbname) as con:
                cur = con.cursor()
                cmd = "DROP TABLE "+tablename
                cur.execute(cmd)
                return 'Done'
        except Exception as e:
            return("Error:\n"+str(e))
        finally:
            con.close()
    else:
        return 'Privilage Error'
    
@app.route('/drop/')
def extra():
    return('Add admin')

@app.route('/')
def seedata():
    try:
        with sqlite3.connect(dbname) as con:
            cur = con.cursor()
            cmd = "Select * from "+tablename
            cur.execute(cmd)
            c = cur.fetchall()
            if c:
                return(render_template('Home.html',data = c))
            else:
                return(render_template('Home.html',data = list()))
                
        """for x in c:
            print(x)"""
    except Exception as e:
        return(str(e))
    finally:
        con.close()
@app.route('/fetch_data/',methods=['GET'])
def fetch_data():
    try:
        start = int(request.args.get('start'))
        stop = int(request.args.get('stop'))
        e=0
        with sqlite3.connect(dbname) as con:
            cur = con.cursor()
            cmd = "Select * from "+tablename
            cur.execute(cmd)
            c = cur.fetchall()
            z = len(c)
            if(stop<len(c)):
                c = c[start:stop]
            else:
                if(start<len(c)):
                    c = c[start:]
                else:
                    c = list()
                    e = 1
            return_data = {
            'data' : c,
            'error' : e,
            'message' : '',
            'count' : z}        
        """for x in c:
            print(x)"""
    except Exception as e:
        return_data = {
            'error' : '1',
            'message' : str(e)
        }
    finally:
        con.close()
    return jsonify(return_data)



if __name__ == '__main__':
   app.run(debug=True)
