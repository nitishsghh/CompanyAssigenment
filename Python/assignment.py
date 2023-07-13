f2=open('exclude.txt',encoding='utf8')
ew=f2.read()
ew=ew.replace('\n',' ')
excludelist=[]
x=ew.split(' ')
for word in x:
    excludelist.append(word)

print('exclude list is',excludelist)
f1=open('Page1.txt',encoding='utf8')
s=f1.read()
s=s.replace('\n',' ')
x=s.split(' ')
data1=[]
for word in x:
    if word not in excludelist:
        data1.append(word)
print(data1)

print('#################################################')

f1=open('Page2.txt',encoding='utf8')
s=f1.read()
s=s.replace('\n',' ')
x=s.split(' ')
data2=[]
for word in x:
    if word not in excludelist:
        data2.append(word)
print(data2)

print('##############################################')
f1=open('Page3.txt',encoding='utf8')
s=f1.read()
s=s.replace('\n',' ')
x=s.split(' ')
data3=[]
for word in x:
    if word not in excludelist:
        data3.append(word)
print(data3)
alldata=data1+data2+data3
data1.sort()
data2.sort()
data3.sort()
f=open('index.txt','a')
for i in  alldata:
    wr=i+':'
    if i in data1:
        wr+='1,'
    if i in data2:
        wr+='2,'
    if i in data3:
        wr+='3,'
    f.write(wr[0:len(wr)-1]+'\n')
f.close()

    
        














