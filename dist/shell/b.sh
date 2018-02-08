while [ -n "$1" ]  
do  
  case "$1" in   
    -a)  
        echo "发现 -a 选项"  
        ;;  
    -b)  
        echo "发现 -b 选项"  
        echo "-b 选项的参数值是：$2"   
        shift  
        ;;  
    -c)  
        echo "发现 -c 选项"  
        echo "-c 选项的参数值是：$2"  
        shift  
        ;;  
    -d)  
        echo "发现 -d 选项"  
        ;;  
    *)  
        echo "$1 is not an option"  
        ;;  
  esac  
  shift  
done