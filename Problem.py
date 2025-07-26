nums = [3, 4, -1, 1]


#nums = [1,3,-1,4]
# bro imposible to solve this o(1) i neeed to make value and check
#every time in lsit tell me if im wrong


def function__sort__postive(nums :list)->list:
  
    for i in range(1,len(nums)):
        counter = 0
        if nums[i]>0:
            while counter<len(nums)-1:
                if nums[i] < nums[counter]:
                    nums[counter],nums[i]  = nums[i],nums[counter]
                counter+=1
            
    
    
    
 

function__sort__postive(nums)


print(nums)





def firstMissingPositive(nums):
    n = len(nums)
    
    for i in range(n):
        while 1 <= nums[i] <= n and nums[nums[i] - 1] != nums[i]:
            correct_index = nums[i] - 1
            nums[i], nums[correct_index] = nums[correct_index], nums[i]
    
    for i in range(n):
        if nums[i] != i + 1:
            return i + 1
    
    return n + 1



def function__sort__positive(nums):
    for i in range(1, len(nums)):
        if nums[i] > 0:
            j = i
            while j > 0 and nums[j-1] > 0 and nums[j] < nums[j-1]:
                nums[j], nums[j-1] = nums[j-1], nums[j]
                j -= 1



