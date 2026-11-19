import json,sys
def L(n): return json.load(open(f'/tmp/fuzz/photos/{n}/site.json'))
def walk(a,b,p,out):
    if type(a)!=type(b): out.append(p); return
    if isinstance(a,dict):
        for k in set(a)|set(b):
            if k not in a or k not in b: out.append(p+'/'+str(k))
            else: walk(a[k],b[k],p+'/'+str(k),out)
    elif isinstance(a,list):
        if len(a)!=len(b): out.append(p+' (liste %d→%d)'%(len(a),len(b))); return
        for i,(x,y) in enumerate(zip(a,b)): walk(x,y,p+'/'+str(i),out)
    elif a!=b: out.append(p)
A,B=L(sys.argv[1]),L(sys.argv[2]); out=[]; walk(A,B,'/site',out)
excl=sys.argv[3] if len(sys.argv)>3 else None
o=[x for x in out if not(excl and excl in x)]
print(len(out),'différences ;',len(o),'hors',excl); print('\n'.join(x[:200] for x in o[:25]))
