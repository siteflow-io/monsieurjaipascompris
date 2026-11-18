import json,sys
a,b=sys.argv[1],sys.argv[2]
def diff(x,y,p,out):
    if x==y: return
    if isinstance(x,dict) and isinstance(y,dict):
        for k in sorted(set(x)|set(y)): diff(x.get(k),y.get(k),p+'/'+str(k),out)
    elif isinstance(x,list) and isinstance(y,list) and len(x)==len(y):
        for i in range(len(x)): diff(x[i],y[i],p+'/'+str(i),out)
    else: out.append((p,x,y))
tot=[]
for f in ['site','presence']:
    out=[]; diff(json.load(open(f'/tmp/fuzz/photos/{a}/{f}.json')),json.load(open(f'/tmp/fuzz/photos/{b}/{f}.json')),'/'+f,out); tot+=out
print(len(tot),'chemins changés entre',a,'et',b)
def court(v): 
    if v is None: return 'ABSENT'
    s=json.dumps(v,ensure_ascii=False); return (type(v).__name__+' '+str(len(s))+' o') if len(s)>60 else s
for p,x,y in tot[:40]: print(' ',p,':',court(x),'→',court(y))
json.dump([[p,x,y] for p,x,y in tot],open(f'/tmp/fuzz/photos/diff-{a}-{b}.json','w'))
